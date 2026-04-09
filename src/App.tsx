/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import html2canvas from 'html2canvas-pro';
import { jsPDF } from 'jspdf';
import Proposta from './components/Proposta';
import Framework from './components/Framework';
import Chatbot from './components/Chatbot';

export default function App() {
  const [activeTab, setActiveTab] = useState('proposta');
  const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = async () => {
    setIsExporting(true);
    
    // Save current scroll position
    const originalScrollY = window.scrollY;
    window.scrollTo(0, 0);
    
    // Wait for React to re-render with all sections visible
    setTimeout(async () => {
      const element = document.getElementById('pdf-content');
      if (!element) {
        window.scrollTo(0, originalScrollY);
        setIsExporting(false);
        return;
      }

      try {
        const pages = Array.from(element.querySelectorAll('.slide, .ksection')) as HTMLElement[];
        
        if (pages.length === 0) {
          setIsExporting(false);
          return;
        }

        let pdf: jsPDF | null = null;

        for (let i = 0; i < pages.length; i++) {
          const pageEl = pages[i];
          const width = pageEl.scrollWidth || 1200;
          const height = pageEl.scrollHeight || 800;

          const canvas = await html2canvas(pageEl, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#0a1628', // var(--color-background-primary)
            width: width,
            height: height,
            windowWidth: 1200,
            scrollY: 0,
            scrollX: 0
          });
          
          const imgData = canvas.toDataURL('image/jpeg', 1.0);
          
          if (!pdf) {
            pdf = new jsPDF({
              orientation: width > height ? 'landscape' : 'portrait',
              unit: 'px',
              format: [width, height]
            });
          } else {
            pdf.addPage([width, height], width > height ? 'landscape' : 'portrait');
            pdf.setPage(i + 1);
          }
          
          pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        }
        
        if (pdf) {
          pdf.save(`Arad_Project.pdf`);
        }
      } catch (error) {
        console.error('Error exporting to PDF:', error);
      } finally {
        window.scrollTo(0, originalScrollY);
        setIsExporting(false);
      }
    }, 500);
  };

  return (
    <>
      <div style={{ height: '4px', background: 'var(--color-accent-gold)', width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}></div>
      <div className="top-tabs" style={{ marginTop: '4px' }}>
        <div style={{ padding: '0 24px', display: 'flex', alignItems: 'center' }}>
          <svg id="Livello_1" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" style={{ height: '64px', width: 'auto' }}>
            <path fill="#fff" d="M745.13,432.63H802.8v47.08C821,442,854.59,423.8,898.14,423.22v61.2H894c-57.68,0-87.69,31.78-87.69,95.33v173h-61.2Z"/>
            <path fill="#fff" d="M1249.45,752.77h-61.2V696.86c-22.36,43-68.26,65.33-118.87,65.33-103,0-164.18-80-164.18-169.49,0-97.69,71.2-169.48,164.18-169.48,63.56,0,104.16,35.3,118.87,65.91v-56.5h61.2ZM966.4,593.87c.59,47.67,34.12,111.23,111.81,111.23,48.84,0,83.56-27.07,99.46-63.56,7-14.71,10.58-31.18,11.17-47.67s-2.35-33-9.41-47.66c-15.3-37.08-51.19-65.91-102.4-65.91-67.08,0-110.63,53-110.63,113Z"/>
            <path fill="#fff" d="M1647,752.77h-58.86V696.86c-17.65,33-53.54,65.33-119.46,65.33-100.63,0-164.18-77.69-164.18-170.08,0-99.46,71.79-168.89,163-168.89,65.32,0,105.34,36.48,118.29,61.78V317.28H1647ZM1365.7,592.7c.59,58.85,41.78,112.4,112.4,112.4a112,112,0,0,0,80-33.54c20.6-20.6,32.37-48.85,31.2-80.63,0-31.78-12.36-59.44-32.37-78.85-20-20-47.67-31.78-78.86-31.78-67.68,0-112.4,51.79-112.4,111.81Z"/>
            <path fill="#fff" d="M688.6,662.77c-.42,2.09-.77,3.89-1.14,5.69-2.29,11-5.78,21.44-12.89,30.33-18.28,22.81-48.08,22.44-65.43-1a45.89,45.89,0,0,1-7-13.51c-4.16-13.65-8.09-27.38-12-41.12l80-210.92H609l-36.12,78.29S568.47,502,566.67,499c-3.47-5.62-7.52-12.27-10.24-16.21-25.18-36.49-54.69-59.62-118.25-59.62C345.2,423.21,274,495,274,592.69c0,89.45,61.2,169.49,164.18,169.49,49.18,0,106.8-23.82,130.55-64.57.75,2.49,1.46,5,2.25,7.48,4.29,13.43,8.48,21.32,16.87,32.85,13.92,19.12,41.95,28.07,62.75,22.73,16.67-4.29,28.48-15.09,36.77-29.75,8.39-14.83,11.9-31.26,14.56-47.88,1.07-6.65,1.78-13.35,2.68-20.27ZM546.47,641.54C530.57,678,495.85,705.09,447,705.09c-77.69,0-111.22-63.55-111.81-111.22v-.59c0-60,43.55-113,110.64-113,51.2,0,87.09,28.84,102.39,65.91,7.07,14.72,10,31.19,9.41,47.67S553.53,626.82,546.47,641.54Z"/>
            <rect fill="#f8db49" x="294.13" y="327.38" width="367" height="43.83"/>
          </svg>
        </div>
        <div style={{ width: '1px', height: '24px', background: 'var(--color-border-tertiary)', margin: '0 16px' }}></div>
        <button
          className={`top-tab ${activeTab === 'proposta' ? 'active' : ''}`}
          onClick={() => setActiveTab('proposta')}
        >
          Scope of work
        </button>
        <button
          className={`top-tab ${activeTab === 'framework' ? 'active' : ''}`}
          onClick={() => setActiveTab('framework')}
        >
          Framework
        </button>
        <div style={{ flex: 1 }}></div>
        <button
          onClick={exportToPDF}
          disabled={isExporting}
          style={{
            marginRight: '24px',
            padding: '8px 16px',
            background: 'var(--color-accent-gold)',
            color: '#000',
            border: 'none',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: isExporting ? 'not-allowed' : 'pointer',
            opacity: isExporting ? 0.7 : 1,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-sans)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          {isExporting ? 'Esportazione...' : 'Esporta PDF'}
        </button>
      </div>

      <div id="pdf-content" className={isExporting ? 'export-mode' : ''}>
        {(isExporting || activeTab === 'proposta') && <Proposta isExporting={isExporting} />}
        {(isExporting || activeTab === 'framework') && <Framework isExporting={isExporting} />}
      </div>
      
      <Chatbot />
    </>
  );
}
