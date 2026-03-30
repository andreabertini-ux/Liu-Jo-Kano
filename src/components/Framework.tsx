import { useState } from 'react';

export default function Framework() {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeCategory, setActiveCategory] = useState('basic');

  const showSection = (id: string) => {
    setActiveSection(id);
  };

  const switchToCategory = (id: string) => {
    setActiveSection('categories');
    setActiveCategory(id);
  };

  const catColors: Record<string, { bg: string; color: string; border: string }> = {
    basic: { bg: '#FAECE7', color: '#993C1D', border: '#F5C4B3' },
    performance: { bg: '#E1F5EE', color: '#0F6E56', border: '#9FE1CB' },
    delighter: { bg: '#EEEDFE', color: '#3C3489', border: '#AFA9EC' },
    indifferent: { bg: '#F1EFE8', color: '#5F5E5A', border: '#D3D1C7' },
    dissatisfying: { bg: '#FCEBEB', color: '#A32D2D', border: '#F7C1C1' },
  };

  return (
    <div className="top-pane active">
      <div className="kano-wrap">
        <div className="hero">
          <div className="badge">Framework di Prioritizzazione</div>
          <h1>Il Modello Kano</h1>
          <p>
            Sviluppato da Noriaki Kano negli anni '80, classifica le funzionalità in 5 categorie in
            base all'impatto sulla soddisfazione del cliente.
          </p>
        </div>
        <div className="knav">
          <button
            className={activeSection === 'overview' ? 'active' : ''}
            onClick={() => showSection('overview')}
          >
            Panoramica
          </button>
          <button
            className={activeSection === 'categories' ? 'active' : ''}
            onClick={() => showSection('categories')}
          >
            Le 5 Categorie
          </button>
          <button
            className={activeSection === 'survey' ? 'active' : ''}
            onClick={() => showSection('survey')}
          >
            Come funziona
          </button>
          <button
            className={activeSection === 'proscons' ? 'active' : ''}
            onClick={() => showSection('proscons')}
          >
            Pro e Contro
          </button>
          <button
            className={activeSection === 'tips' ? 'active' : ''}
            onClick={() => showSection('tips')}
          >
            Best Practice
          </button>
        </div>

        {activeSection === 'overview' && (
          <div className="ksection active">
            <div className="kano-chart-wrap">
              <svg width="100%" viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker
                    id="arrow"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path
                      d="M2 1L8 5L2 9"
                      fill="none"
                      stroke="context-stroke"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </marker>
                </defs>
                <line
                  x1="60"
                  y1="20"
                  x2="60"
                  y2="340"
                  stroke="rgba(0,0,0,0.12)"
                  strokeWidth="0.5"
                />
                <line
                  x1="60"
                  y1="180"
                  x2="620"
                  y2="180"
                  stroke="rgba(0,0,0,0.12)"
                  strokeWidth="0.5"
                />
                <line
                  x1="60"
                  y1="340"
                  x2="620"
                  y2="340"
                  stroke="rgba(0,0,0,0.22)"
                  strokeWidth="1"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="60"
                  y1="340"
                  x2="60"
                  y2="20"
                  stroke="rgba(0,0,0,0.22)"
                  strokeWidth="1"
                  markerEnd="url(#arrow)"
                />
                <text x="340" y="365" className="ts" textAnchor="middle">
                  Implementazione della funzionalità →
                </text>
                <text
                  x="22"
                  y="180"
                  className="ts"
                  textAnchor="middle"
                  transform="rotate(-90 22 180)"
                >
                  Soddisfazione del cliente →
                </text>
                <text x="62" y="40" className="ts" textAnchor="start" fill="rgba(0,0,0,0.4)">
                  Alta
                </text>
                <text x="62" y="174" className="ts" textAnchor="start">
                  Neutrale
                </text>
                <text x="62" y="355" className="ts" textAnchor="start" fill="rgba(0,0,0,0.4)">
                  Bassa
                </text>
                <path
                  d="M60 310 Q200 290 340 180 Q450 100 620 40"
                  fill="none"
                  stroke="#534AB7"
                  strokeWidth="2.5"
                />
                <text x="548" y="60" className="ts" fill="#534AB7" textAnchor="middle">
                  Delighter
                </text>
                <path
                  d="M60 220 Q200 200 340 180 Q480 160 620 140"
                  fill="none"
                  stroke="#0F6E56"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
                <text x="555" y="134" className="ts" fill="#0F6E56">
                  Performance
                </text>
                <path
                  d="M60 340 Q160 340 280 280 Q380 230 620 180"
                  fill="none"
                  stroke="#D85A30"
                  strokeWidth="2"
                  strokeDasharray="3 3"
                />
                <text x="555" y="192" className="ts" fill="#D85A30">
                  Basic
                </text>
                <path
                  d="M60 178 Q340 178 620 178"
                  fill="none"
                  stroke="#888780"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <text x="555" y="172" className="ts" fill="#888780">
                  Indifferent
                </text>
                <path
                  d="M60 140 Q200 160 340 180 Q480 210 620 260"
                  fill="none"
                  stroke="#E24B4A"
                  strokeWidth="2"
                />
                <text x="555" y="278" className="ts" fill="#E24B4A">
                  Dissatisfying
                </text>
                <circle cx="340" cy="180" r="5" fill="rgba(0,0,0,0.22)" />
              </svg>
            </div>
            <div
              style={{
                maxWidth: '640px',
                margin: '0 auto 1.5rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
              }}
            >
              <div
                style={{
                  border: '0.5px solid var(--color-border-tertiary)',
                  borderRadius: 'var(--border-radius-lg)',
                  padding: '14px',
                }}
              >
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--color-text-primary)',
                    marginBottom: '5px',
                  }}
                >
                  Soddisfazione del cliente
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  Misura la reazione emotiva al prodotto: da fortemente negativa (il cliente è deluso
                  o frustrato) a fortemente positiva (è sorpreso e soddisfatto). Il punto neutro
                  indica indifferenza.
                </p>
              </div>
              <div
                style={{
                  border: '0.5px solid var(--color-border-tertiary)',
                  borderRadius: 'var(--border-radius-lg)',
                  padding: '14px',
                }}
              >
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--color-text-primary)',
                    marginBottom: '5px',
                  }}
                >
                  Implementazione della funzionalità
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  Non è una scala temporale, ma di <em>grado</em>: da assente (sinistra) a pienamente
                  implementata (destra). Permette di valutare come cambia la soddisfazione al
                  variare della presenza o qualità di una funzionalità.
                </p>
              </div>
            </div>
            <p className="section-sub" style={{ textAlign: 'center' }}>
              Clicca una categoria per approfondire
            </p>
            <div className="def-grid">
              <div className="def-card" onClick={() => switchToCategory('basic')}>
                <span className="klabel" style={{ background: '#FAECE7', color: '#993C1D' }}>
                  Must-be
                </span>
                <p>
                  Funzionalità di base attese da tutti i clienti. La loro assenza causa grande
                  insoddisfazione.
                </p>
              </div>
              <div className="def-card" onClick={() => switchToCategory('performance')}>
                <span className="klabel" style={{ background: '#E1F5EE', color: '#0F6E56' }}>
                  Performance
                </span>
                <p>
                  Più sono implementate, più il cliente è soddisfatto. Impatto lineare e diretto.
                </p>
              </div>
              <div className="def-card" onClick={() => switchToCategory('delighter')}>
                <span className="klabel" style={{ background: '#EEEDFE', color: '#3C3489' }}>
                  Delighter
                </span>
                <p>
                  Funzionalità inaspettate che sorprendono e deliziano i clienti, creando vantaggio
                  competitivo.
                </p>
              </div>
              <div className="def-card" onClick={() => switchToCategory('indifferent')}>
                <span className="klabel" style={{ background: '#F1EFE8', color: '#5F5E5A' }}>
                  Indifferent
                </span>
                <p>
                  Presenza o assenza non influisce sulla soddisfazione. Poco impatto sulle decisioni
                  d'acquisto.
                </p>
              </div>
              <div
                className="def-card"
                style={{ gridColumn: 'span 2' }}
                onClick={() => switchToCategory('dissatisfying')}
              >
                <span className="klabel" style={{ background: '#FCEBEB', color: '#A32D2D' }}>
                  Dissatisfying
                </span>
                <p>
                  Funzionalità reverse: più vengono implementate, più causano insoddisfazione nel
                  cliente.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'categories' && (
          <div className="ksection active">
            <div className="cat-tabs">
              {Object.keys(catColors).map((cat) => (
                <button
                  key={cat}
                  className={`cat-tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  style={
                    activeCategory === cat
                      ? {
                          background: catColors[cat].bg,
                          color: catColors[cat].color,
                          borderColor: catColors[cat].border,
                        }
                      : {}
                  }
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {activeCategory === 'basic' && (
              <div className="cat-panel active">
                <div className="cat-info">
                  <h3>Basic Features</h3>
                  <div className="aka">Anche dette: Must-be features</div>
                  <p>
                    Sono le necessità fondamentali che ogni cliente si aspetta da un prodotto. La
                    loro assenza genera altissima insoddisfazione. Tuttavia, la loro sola presenza
                    non basta a soddisfare il cliente.
                  </p>
                  <div className="example-box" style={{ borderColor: '#D85A30' }}>
                    <strong>Esempio hotel:</strong> Acqua calda. Un hotel a 5 stelle senza acqua
                    calda sarebbe un disastro — indipendentemente da qualsiasi altro lusso offra.
                  </div>
                </div>
                <div className="cat-chart">
                  <svg width="100%" viewBox="0 0 280 200">
                    <defs>
                      <marker
                        id="a2"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="5"
                        markerHeight="5"
                        orient="auto"
                      >
                        <path
                          d="M2 1L8 5L2 9"
                          fill="none"
                          stroke="#888"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </marker>
                    </defs>
                    <line
                      x1="30"
                      y1="170"
                      x2="265"
                      y2="170"
                      stroke="rgba(0,0,0,0.22)"
                      strokeWidth="1"
                      markerEnd="url(#a2)"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="30"
                      y2="15"
                      stroke="rgba(0,0,0,0.22)"
                      strokeWidth="1"
                      markerEnd="url(#a2)"
                    />
                    <path
                      d="M30 170 Q100 170 160 110 Q210 70 265 30"
                      fill="none"
                      stroke="#D85A30"
                      strokeWidth="2.5"
                    />
                    <text x="148" y="185" className="ts" textAnchor="middle">
                      Implementazione
                    </text>
                    <text
                      x="18"
                      y="100"
                      className="ts"
                      textAnchor="middle"
                      transform="rotate(-90 18 100)"
                    >
                      Soddisfazione
                    </text>
                    <text x="200" y="44" className="ts" fill="#D85A30">
                      Assenza = molto negativo
                    </text>
                  </svg>
                </div>
              </div>
            )}

            {activeCategory === 'performance' && (
              <div className="cat-panel active">
                <div className="cat-info">
                  <h3>Performance Features</h3>
                  <div className="aka">Anche dette: One-dimensional features</div>
                  <p>
                    Funzionalità con impatto diretto sulla qualità percepita. Più performano, più il
                    cliente è soddisfatto. Sono ciò che i clienti cercano esplicitamente e ciò che
                    determina la competitività.
                  </p>
                  <div className="example-box" style={{ borderColor: '#0F6E56' }}>
                    <strong>Esempio hotel:</strong> Letto comodo, WiFi veloce, buona colazione.
                    Migliore è ciascuno, più l'ospite è soddisfatto.
                  </div>
                </div>
                <div className="cat-chart">
                  <svg width="100%" viewBox="0 0 280 200">
                    <defs>
                      <marker
                        id="a3"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="5"
                        markerHeight="5"
                        orient="auto"
                      >
                        <path
                          d="M2 1L8 5L2 9"
                          fill="none"
                          stroke="#888"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </marker>
                    </defs>
                    <line
                      x1="30"
                      y1="100"
                      x2="265"
                      y2="100"
                      stroke="rgba(0,0,0,0.12)"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="265"
                      y2="170"
                      stroke="rgba(0,0,0,0.22)"
                      strokeWidth="1"
                      markerEnd="url(#a3)"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="30"
                      y2="15"
                      stroke="rgba(0,0,0,0.22)"
                      strokeWidth="1"
                      markerEnd="url(#a3)"
                    />
                    <path
                      d="M30 160 Q148 100 265 40"
                      fill="none"
                      stroke="#0F6E56"
                      strokeWidth="2.5"
                    />
                    <text x="148" y="185" className="ts" textAnchor="middle">
                      Implementazione
                    </text>
                    <text
                      x="18"
                      y="100"
                      className="ts"
                      textAnchor="middle"
                      transform="rotate(-90 18 100)"
                    >
                      Soddisfazione
                    </text>
                    <text x="220" y="55" className="ts" fill="#0F6E56">
                      Lineare
                    </text>
                  </svg>
                </div>
              </div>
            )}

            {activeCategory === 'delighter' && (
              <div className="cat-panel active">
                <div className="cat-info">
                  <h3>Delighter Features</h3>
                  <div className="aka">Anche dette: Attractive features</div>
                  <p>
                    Funzionalità inaspettate che sorprendono positivamente il cliente. Non sono
                    necessarie, ma quando presenti creano un forte vantaggio competitivo. I clienti
                    non sanno di volerle finché non le scoprono.
                  </p>
                  <div className="example-box" style={{ borderColor: '#534AB7' }}>
                    <strong>Esempio hotel:</strong> Biscotti caldi al check-in (DoubleTree). Un gesto
                    semplice che crea un ricordo positivo indelebile.
                  </div>
                </div>
                <div className="cat-chart">
                  <svg width="100%" viewBox="0 0 280 200">
                    <defs>
                      <marker
                        id="a4"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="5"
                        markerHeight="5"
                        orient="auto"
                      >
                        <path
                          d="M2 1L8 5L2 9"
                          fill="none"
                          stroke="#888"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </marker>
                    </defs>
                    <line
                      x1="30"
                      y1="100"
                      x2="265"
                      y2="100"
                      stroke="rgba(0,0,0,0.12)"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="265"
                      y2="170"
                      stroke="rgba(0,0,0,0.22)"
                      strokeWidth="1"
                      markerEnd="url(#a4)"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="30"
                      y2="15"
                      stroke="rgba(0,0,0,0.22)"
                      strokeWidth="1"
                      markerEnd="url(#a4)"
                    />
                    <path
                      d="M30 95 Q80 92 160 80 Q220 55 265 25"
                      fill="none"
                      stroke="#534AB7"
                      strokeWidth="2.5"
                    />
                    <text x="148" y="185" className="ts" textAnchor="middle">
                      Implementazione
                    </text>
                    <text
                      x="18"
                      y="100"
                      className="ts"
                      textAnchor="middle"
                      transform="rotate(-90 18 100)"
                    >
                      Soddisfazione
                    </text>
                    <text x="200" y="42" className="ts" fill="#534AB7">
                      Wow effect!
                    </text>
                    <text x="75" y="110" className="ts">
                      Neutrale se assente
                    </text>
                  </svg>
                </div>
              </div>
            )}

            {activeCategory === 'indifferent' && (
              <div className="cat-panel active">
                <div className="cat-info">
                  <h3>Indifferent Features</h3>
                  <div className="aka">Nessun impatto sulla soddisfazione</div>
                  <p>
                    Funzionalità che i clienti non notano né in positivo né in negativo. Possono
                    essere utili internamente al team, ma non influenzano la percezione del prodotto
                    né le decisioni d'acquisto.
                  </p>
                  <div className="example-box" style={{ borderColor: '#888780' }}>
                    <strong>Esempio hotel:</strong> Ascensore di servizio per il personale. Gli ospiti
                    non lo usano e non lo notano mai.
                  </div>
                </div>
                <div className="cat-chart">
                  <svg width="100%" viewBox="0 0 280 200">
                    <defs>
                      <marker
                        id="a5"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="5"
                        markerHeight="5"
                        orient="auto"
                      >
                        <path
                          d="M2 1L8 5L2 9"
                          fill="none"
                          stroke="#888"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </marker>
                    </defs>
                    <line
                      x1="30"
                      y1="100"
                      x2="265"
                      y2="100"
                      stroke="rgba(0,0,0,0.12)"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="265"
                      y2="170"
                      stroke="rgba(0,0,0,0.22)"
                      strokeWidth="1"
                      markerEnd="url(#a5)"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="30"
                      y2="15"
                      stroke="rgba(0,0,0,0.22)"
                      strokeWidth="1"
                      markerEnd="url(#a5)"
                    />
                    <path
                      d="M30 100 L265 100"
                      fill="none"
                      stroke="#888780"
                      strokeWidth="2.5"
                    />
                    <text x="148" y="185" className="ts" textAnchor="middle">
                      Implementazione
                    </text>
                    <text
                      x="18"
                      y="100"
                      className="ts"
                      textAnchor="middle"
                      transform="rotate(-90 18 100)"
                    >
                      Soddisfazione
                    </text>
                    <text x="148" y="88" className="ts" fill="#888780" textAnchor="middle">
                      Nessun impatto
                    </text>
                  </svg>
                </div>
              </div>
            )}

            {activeCategory === 'dissatisfying' && (
              <div className="cat-panel active">
                <div className="cat-info">
                  <h3>Dissatisfying Features</h3>
                  <div className="aka">Anche dette: Reverse features</div>
                  <p>
                    Funzionalità che riducono la soddisfazione man mano che vengono implementate. Più
                    vengono aggiunte, peggio è. Spesso si tratta di complessità inutile o di
                    funzionalità non desiderate.
                  </p>
                  <div className="example-box" style={{ borderColor: '#E24B4A' }}>
                    <strong>Esempio hotel:</strong> Stanza molto piccola (capsule hotel). Più è
                    piccola rispetto al prezzo, più il cliente è insoddisfatto.
                  </div>
                </div>
                <div className="cat-chart">
                  <svg width="100%" viewBox="0 0 280 200">
                    <defs>
                      <marker
                        id="a6"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="5"
                        markerHeight="5"
                        orient="auto"
                      >
                        <path
                          d="M2 1L8 5L2 9"
                          fill="none"
                          stroke="#888"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </marker>
                    </defs>
                    <line
                      x1="30"
                      y1="100"
                      x2="265"
                      y2="100"
                      stroke="rgba(0,0,0,0.12)"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="265"
                      y2="170"
                      stroke="rgba(0,0,0,0.22)"
                      strokeWidth="1"
                      markerEnd="url(#a6)"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="30"
                      y2="15"
                      stroke="rgba(0,0,0,0.22)"
                      strokeWidth="1"
                      markerEnd="url(#a6)"
                    />
                    <path
                      d="M30 60 Q100 80 160 100 Q220 120 265 148"
                      fill="none"
                      stroke="#E24B4A"
                      strokeWidth="2.5"
                    />
                    <text x="148" y="185" className="ts" textAnchor="middle">
                      Implementazione
                    </text>
                    <text
                      x="18"
                      y="100"
                      className="ts"
                      textAnchor="middle"
                      transform="rotate(-90 18 100)"
                    >
                      Soddisfazione
                    </text>
                    <text x="60" y="52" className="ts" fill="#E24B4A">
                      Più = peggio
                    </text>
                  </svg>
                </div>
              </div>
            )}
          </div>
        )}

        {activeSection === 'survey' && (
          <div className="ksection active">
            <p className="section-title">Come raccogliere i dati</p>
            <p className="section-sub">
              Il modello usa un questionario standardizzato con domande funzionali e disfunzionali
            </p>
            <div className="survey-grid">
              <div className="survey-card">
                <h4>Domanda Funzionale</h4>
                <p>
                  Come ti sentiresti se questa funzionalità <strong>fosse presente</strong>?
                </p>
                <p style={{ marginTop: '8px', fontSize: '12px', color: 'var(--color-text-tertiary)' }}>
                  Es: "Come ti sentiresti se aggiungessimo l'integrazione con PayPal?"
                </p>
                <ul className="scale-list">
                  <li>Mi piace</li>
                  <li>Me lo aspetto</li>
                  <li>Neutrale</li>
                  <li>Posso tollerarlo</li>
                  <li>Non mi piace</li>
                </ul>
              </div>
              <div className="survey-card">
                <h4>Domanda Disfunzionale</h4>
                <p>
                  Come ti sentiresti se questa funzionalità <strong>non ci fosse</strong>?
                </p>
                <p style={{ marginTop: '8px', fontSize: '12px', color: 'var(--color-text-tertiary)' }}>
                  Es: "Come ti sentiresti se non aggiungessimo l'integrazione con PayPal?"
                </p>
                <ul className="scale-list">
                  <li>Mi piace</li>
                  <li>Me lo aspetto</li>
                  <li>Neutrale</li>
                  <li>Posso tollerarlo</li>
                  <li>Non mi piace</li>
                </ul>
              </div>
            </div>
            <p className="section-title">Tabella di classificazione</p>
            <p className="section-sub">
              Incrociando le risposte si ottiene la categoria della funzionalità
            </p>
            <div style={{ maxWidth: '640px', margin: '0 auto', overflowX: 'auto' }}>
              <svg width="100%" viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="110"
                  y="10"
                  width="520"
                  height="34"
                  rx="6"
                  fill="rgba(0,0,0,0.06)"
                  stroke="rgba(0,0,0,0.12)"
                  strokeWidth="0.5"
                />
                <text x="160" y="31" className="ts" textAnchor="middle">
                  Mi piace
                </text>
                <text x="265" y="31" className="ts" textAnchor="middle">
                  Me lo aspetto
                </text>
                <text x="370" y="31" className="ts" textAnchor="middle">
                  Neutrale
                </text>
                <text x="475" y="31" className="ts" textAnchor="middle">
                  Lo tollero
                </text>
                <text x="580" y="31" className="ts" textAnchor="middle">
                  Non mi piace
                </text>
                <text x="57.5" y="31" className="ts" textAnchor="middle">
                  Funz. ↓ Disfunz. →
                </text>

                {/* Row 1 */}
                <rect x="10" y="50" width="95" height="34" rx="4" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="57.5" y="71" className="ts" textAnchor="middle">Mi piace</text>
                <rect x="110" y="50" width="100" height="34" rx="4" fill="#F1EFE8" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="160" y="71" className="ts" fill="#5F5E5A" textAnchor="middle">Questionabile</text>
                <rect x="215" y="50" width="100" height="34" rx="4" fill="#EEEDFE" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="265" y="71" className="ts" fill="#3C3489" textAnchor="middle">Delighter</text>
                <rect x="320" y="50" width="100" height="34" rx="4" fill="#EEEDFE" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="370" y="71" className="ts" fill="#3C3489" textAnchor="middle">Delighter</text>
                <rect x="425" y="50" width="100" height="34" rx="4" fill="#EEEDFE" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="475" y="71" className="ts" fill="#3C3489" textAnchor="middle">Delighter</text>
                <rect x="530" y="50" width="100" height="34" rx="4" fill="#E1F5EE" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="580" y="71" className="ts" fill="#0F6E56" textAnchor="middle">Performance</text>

                {/* Row 2 */}
                <rect x="10" y="89" width="95" height="34" rx="4" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="57.5" y="110" className="ts" textAnchor="middle">Me lo aspetto</text>
                <rect x="110" y="89" width="100" height="34" rx="4" fill="#FCEBEB" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="160" y="110" className="ts" fill="#A32D2D" textAnchor="middle">Reverse</text>
                <rect x="215" y="89" width="100" height="34" rx="4" fill="#F1EFE8" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="265" y="110" className="ts" fill="#5F5E5A" textAnchor="middle">Indifferente</text>
                <rect x="320" y="89" width="100" height="34" rx="4" fill="#F1EFE8" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="370" y="110" className="ts" fill="#5F5E5A" textAnchor="middle">Indifferente</text>
                <rect x="425" y="89" width="100" height="34" rx="4" fill="#F1EFE8" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="475" y="110" className="ts" fill="#5F5E5A" textAnchor="middle">Indifferente</text>
                <rect x="530" y="89" width="100" height="34" rx="4" fill="#FAECE7" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="580" y="110" className="ts" fill="#993C1D" textAnchor="middle">Basic</text>

                {/* Row 3 */}
                <rect x="10" y="128" width="95" height="34" rx="4" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="57.5" y="149" className="ts" textAnchor="middle">Neutrale</text>
                <rect x="110" y="128" width="100" height="34" rx="4" fill="#FCEBEB" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="160" y="149" className="ts" fill="#A32D2D" textAnchor="middle">Reverse</text>
                <rect x="215" y="128" width="100" height="34" rx="4" fill="#F1EFE8" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="265" y="149" className="ts" fill="#5F5E5A" textAnchor="middle">Indifferente</text>
                <rect x="320" y="128" width="100" height="34" rx="4" fill="#F1EFE8" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="370" y="149" className="ts" fill="#5F5E5A" textAnchor="middle">Indifferente</text>
                <rect x="425" y="128" width="100" height="34" rx="4" fill="#F1EFE8" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="475" y="149" className="ts" fill="#5F5E5A" textAnchor="middle">Indifferente</text>
                <rect x="530" y="128" width="100" height="34" rx="4" fill="#FAECE7" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="580" y="149" className="ts" fill="#993C1D" textAnchor="middle">Basic</text>

                {/* Row 4 */}
                <rect x="10" y="167" width="95" height="34" rx="4" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="57.5" y="188" className="ts" textAnchor="middle">Lo tollero</text>
                <rect x="110" y="167" width="100" height="34" rx="4" fill="#FCEBEB" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="160" y="188" className="ts" fill="#A32D2D" textAnchor="middle">Reverse</text>
                <rect x="215" y="167" width="100" height="34" rx="4" fill="#F1EFE8" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="265" y="188" className="ts" fill="#5F5E5A" textAnchor="middle">Indifferente</text>
                <rect x="320" y="167" width="100" height="34" rx="4" fill="#F1EFE8" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="370" y="188" className="ts" fill="#5F5E5A" textAnchor="middle">Indifferente</text>
                <rect x="425" y="167" width="100" height="34" rx="4" fill="#F1EFE8" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="475" y="188" className="ts" fill="#5F5E5A" textAnchor="middle">Indifferente</text>
                <rect x="530" y="167" width="100" height="34" rx="4" fill="#FAECE7" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="580" y="188" className="ts" fill="#993C1D" textAnchor="middle">Basic</text>

                {/* Row 5 */}
                <rect x="10" y="206" width="95" height="34" rx="4" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="57.5" y="227" className="ts" textAnchor="middle">Non mi piace</text>
                <rect x="110" y="206" width="100" height="34" rx="4" fill="#FCEBEB" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="160" y="227" className="ts" fill="#A32D2D" textAnchor="middle">Reverse</text>
                <rect x="215" y="206" width="100" height="34" rx="4" fill="#FCEBEB" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="265" y="227" className="ts" fill="#A32D2D" textAnchor="middle">Reverse</text>
                <rect x="320" y="206" width="100" height="34" rx="4" fill="#FCEBEB" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="370" y="227" className="ts" fill="#A32D2D" textAnchor="middle">Reverse</text>
                <rect x="425" y="206" width="100" height="34" rx="4" fill="#FCEBEB" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="475" y="227" className="ts" fill="#A32D2D" textAnchor="middle">Reverse</text>
                <rect x="530" y="206" width="100" height="34" rx="4" fill="#F1EFE8" stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
                <text x="580" y="227" className="ts" fill="#5F5E5A" textAnchor="middle">Questionabile</text>

                <text x="320" y="265" className="ts" textAnchor="middle">
                  Riga = risposta domanda funzionale · Colonna = risposta domanda disfunzionale
                </text>
              </svg>
            </div>
            <div
              style={{
                maxWidth: '640px',
                margin: '1.5rem auto 0',
                border: '0.5px solid rgba(0,0,0,0.12)',
                borderRadius: '12px',
                padding: '16px',
              }}
            >
              <h4
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--color-text-primary)',
                  marginBottom: '8px',
                }}
              >
                Evoluzione nel tempo
              </h4>
              <svg width="100%" viewBox="0 0 580 70" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker
                    id="ae"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto"
                  >
                    <path
                      d="M2 1L8 5L2 9"
                      fill="none"
                      stroke="#888780"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </marker>
                </defs>
                <rect
                  x="10"
                  y="20"
                  width="110"
                  height="32"
                  rx="6"
                  fill="#EEEDFE"
                  stroke="#AFA9EC"
                  strokeWidth="0.5"
                />
                <text x="65" y="40" className="ts" fill="#3C3489" textAnchor="middle">
                  Delighter
                </text>
                <line
                  x1="122"
                  y1="36"
                  x2="168"
                  y2="36"
                  stroke="#888780"
                  strokeWidth="1"
                  markerEnd="url(#ae)"
                />
                <text x="145" y="28" className="ts" textAnchor="middle">
                  tempo
                </text>
                <rect
                  x="170"
                  y="20"
                  width="110"
                  height="32"
                  rx="6"
                  fill="#E1F5EE"
                  stroke="#9FE1CB"
                  strokeWidth="0.5"
                />
                <text x="225" y="40" className="ts" fill="#0F6E56" textAnchor="middle">
                  Performance
                </text>
                <line
                  x1="282"
                  y1="36"
                  x2="328"
                  y2="36"
                  stroke="#888780"
                  strokeWidth="1"
                  markerEnd="url(#ae)"
                />
                <text x="305" y="28" className="ts" textAnchor="middle">
                  tempo
                </text>
                <rect
                  x="330"
                  y="20"
                  width="110"
                  height="32"
                  rx="6"
                  fill="#FAECE7"
                  stroke="#F5C4B3"
                  strokeWidth="0.5"
                />
                <text x="385" y="40" className="ts" fill="#993C1D" textAnchor="middle">
                  Basic
                </text>
                <text x="488" y="36" className="ts" textAnchor="middle">
                  ⟶ nuovo delighter
                </text>
              </svg>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--color-text-secondary)',
                  marginTop: '4px',
                }}
              >
                Le categorie evolvono: un delighter di oggi diventa una performance feature, poi un
                basic. Es: bottigliette di shampoo in hotel.
              </p>
            </div>
          </div>
        )}

        {activeSection === 'proscons' && (
          <div className="ksection active">
            <div className="pc-grid">
              <div className="pc-card" style={{ borderColor: '#9FE1CB' }}>
                <h3 style={{ color: '#0F6E56' }}>Vantaggi</h3>
                <ul>
                  <li data-icon="✓">Identifica e prioritizza i bisogni del cliente</li>
                  <li data-icon="✓">Rivela quali funzionalità creano più valore</li>
                  <li data-icon="✓">Aumenta soddisfazione e fidelizzazione</li>
                  <li data-icon="✓">Ottimizza le risorse verso ciò che conta</li>
                  <li data-icon="✓">Individua opportunità di innovazione</li>
                </ul>
              </div>
              <div className="pc-card" style={{ borderColor: '#F7C1C1' }}>
                <h3 style={{ color: '#A32D2D' }}>Limiti</h3>
                <ul>
                  <li data-icon="✗">Non considera costo e fattibilità</li>
                  <li data-icon="✗">Risultati aperti a interpretazione</li>
                  <li data-icon="✗">Non spiega il "perché" di una priorità</li>
                  <li data-icon="✗">Difficile applicare con clienti eterogenei</li>
                  <li data-icon="✗">Non tiene conto di differenze culturali</li>
                  <li data-icon="✗">Scope limitato: solo prospettiva cliente</li>
                </ul>
              </div>
            </div>
            <div
              style={{
                maxWidth: '640px',
                margin: '0 auto',
                border: '0.5px solid rgba(0,0,0,0.12)',
                borderRadius: '12px',
                padding: '14px',
              }}
            >
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Nessun framework da solo offre tutte le risposte. Il Kano è ideale combinato con
                altri strumenti (RICE, MoSCoW, ICE) per coprire anche fattibilità tecnica, impatto
                sul business e costi.
              </p>
            </div>
          </div>
        )}

        {activeSection === 'tips' && (
          <div className="ksection active">
            <p className="section-title">Best Practice per l'analisi Kano</p>
            <p className="section-sub">Consigli per usare il modello in modo efficace</p>
            <div className="tips-list">
              <div className="tip-item">
                <div className="tip-num">1</div>
                <p>
                  Prima risolvi le <strong>basic features</strong> e le{' '}
                  <strong>performance features</strong>, poi usa i delighter per differenziarti dalla
                  concorrenza.
                </p>
              </div>
              <div className="tip-item">
                <div className="tip-num">2</div>
                <p>
                  Aggiorna l'analisi regolarmente: i bisogni cambiano nel tempo. Un delighter di
                  oggi sarà una basic feature domani.
                </p>
              </div>
              <div className="tip-item">
                <div className="tip-num">3</div>
                <p>
                  Non ignorare automaticamente le funzionalità "indifferenti" se semplificano il
                  lavoro del team o degli sviluppatori — hanno comunque valore interno.
                </p>
              </div>
              <div className="tip-item">
                <div className="tip-num">4</div>
                <p>
                  Usa il Kano in combinazione con altri framework per considerare anche fattibilità
                  tecnica, costi e impatto sul business.
                </p>
              </div>
              <div className="tip-item">
                <div className="tip-num">5</div>
                <p>
                  Segmenta il campione: clienti diversi possono avere aspettative diverse per la
                  stessa funzionalità. Analizza per segmento quando possibile.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
