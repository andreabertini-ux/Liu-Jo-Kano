import { useState } from 'react';
import { motion } from 'motion/react';

export default function Framework({ isExporting }: { isExporting?: boolean }) {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeCategory, setActiveCategory] = useState('must-be');

  const showSection = (id: string) => {
    setActiveSection(id);
  };

  const switchToCategory = (id: string) => {
    setActiveSection('categories');
    setActiveCategory(id);
  };

  const catColors: Record<string, { bg: string; color: string; border: string }> = {
    'must-be': { bg: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: 'rgba(239, 68, 68, 0.4)' },
    performance: { bg: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: 'rgba(59, 130, 246, 0.4)' },
    delighter: { bg: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: 'rgba(16, 185, 129, 0.4)' },
    indifferent: { bg: 'rgba(156, 163, 175, 0.1)', color: '#9ca3af', border: 'rgba(156, 163, 175, 0.4)' },
    dissatisfying: { bg: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', border: 'rgba(245, 158, 11, 0.4)' },
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
        {!isExporting && (
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
        )}

        {(isExporting || activeSection === 'overview') && (
          <div className={`ksection ${isExporting || activeSection === 'overview' ? 'active' : ''}`}>
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
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.5"
                />
                <line
                  x1="60"
                  y1="180"
                  x2="620"
                  y2="180"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.5"
                />
                <line
                  x1="60"
                  y1="340"
                  x2="620"
                  y2="340"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1="60"
                  y1="340"
                  x2="60"
                  y2="20"
                  stroke="rgba(255,255,255,0.2)"
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
                <text x="62" y="40" className="ts" textAnchor="start" fill="rgba(255,255,255,0.4)">
                  Alta
                </text>
                <text x="62" y="174" className="ts" textAnchor="start">
                  Neutrale
                </text>
                <text x="62" y="355" className="ts" textAnchor="start" fill="rgba(255,255,255,0.4)">
                  Bassa
                </text>
                <motion.path
                  d="M60 310 Q200 290 340 180 Q450 100 620 40"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                <motion.text
                  x="548"
                  y="60"
                  className="ts"
                  fill="#10b981"
                  textAnchor="middle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Delighter
                </motion.text>
                <motion.path
                  d="M60 220 Q200 200 340 180 Q480 160 620 140"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
                <motion.text
                  x="555"
                  y="134"
                  className="ts"
                  fill="#3b82f6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Performance
                </motion.text>
                <motion.path
                  d="M60 340 Q160 340 280 280 Q380 230 620 180"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeDasharray="3 3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                />
                <motion.text
                  x="555"
                  y="192"
                  className="ts"
                  fill="#ef4444"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Must-be
                </motion.text>
                <motion.path
                  d="M60 178 Q340 178 620 178"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                />
                <motion.text
                  x="555"
                  y="172"
                  className="ts"
                  fill="#9ca3af"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  Indifferent
                </motion.text>
                <motion.path
                  d="M60 140 Q200 160 340 180 Q480 210 620 260"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                />
                <motion.text
                  x="555"
                  y="278"
                  className="ts"
                  fill="#f59e0b"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  Dissatisfying
                </motion.text>
                <circle cx="340" cy="180" r="5" fill="rgba(255,255,255,0.2)" />
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
                    fontWeight: 600,
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
                    fontWeight: 600,
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
              <div className="def-card" onClick={() => switchToCategory('must-be')}>
                <span className="klabel" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
                  Must-be
                </span>
                <p>
                  Funzionalità di base attese da tutti i clienti. La loro assenza causa grande
                  insoddisfazione.
                </p>
              </div>
              <div className="def-card" onClick={() => switchToCategory('performance')}>
                <span className="klabel" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                  Performance
                </span>
                <p>
                  Più sono implementate, più il cliente è soddisfatto. Impatto lineare e diretto.
                </p>
              </div>
              <div className="def-card" onClick={() => switchToCategory('delighter')}>
                <span className="klabel" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                  Delighter
                </span>
                <p>
                  Funzionalità inaspettate che sorprendono e deliziano i clienti, creando vantaggio
                  competitivo.
                </p>
              </div>
              <div className="def-card" onClick={() => switchToCategory('indifferent')}>
                <span className="klabel" style={{ background: 'rgba(156, 163, 175, 0.1)', color: '#9ca3af' }}>
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
                <span className="klabel" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
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

        {(isExporting || activeSection === 'categories') && (
          <div className={`ksection ${isExporting || activeSection === 'categories' ? 'active' : ''}`}>
            <div className="cat-tabs" style={{ display: isExporting ? 'none' : 'flex' }}>
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
                  {cat === 'must-be' ? 'MUST-BE' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {(isExporting || activeCategory === 'must-be') && (
              <div className={`cat-panel ${isExporting || activeCategory === 'must-be' ? 'active' : ''}`}>
                <div className="cat-info">
                  <h3>Must-be Features</h3>
                  <div className="aka">Anche dette: Basic features</div>
                  <p>
                    Sono le necessità fondamentali che ogni cliente si aspetta da un prodotto. La
                    loro assenza genera altissima insoddisfazione. Tuttavia, la loro sola presenza
                    non basta a soddisfare il cliente.
                  </p>
                  <div className="example-box" style={{ borderColor: '#ef4444' }}>
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
                          stroke="rgba(255,255,255,0.4)"
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
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="265"
                      y2="170"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      markerEnd="url(#a2)"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="30"
                      y2="15"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      markerEnd="url(#a2)"
                    />
                    <path
                      d="M30 165 Q100 165 160 140 Q220 115 265 105"
                      fill="none"
                      stroke="#ef4444"
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
                    <text x="40" y="150" className="ts" fill="#ef4444">
                      Assenza = molto negativo
                    </text>
                  </svg>
                </div>
              </div>
            )}

            {(isExporting || activeCategory === 'performance') && (
              <div className={`cat-panel ${isExporting || activeCategory === 'performance' ? 'active' : ''}`}>
                <div className="cat-info">
                  <h3>Performance Features</h3>
                  <div className="aka">Anche dette: One-dimensional features</div>
                  <p>
                    Funzionalità con impatto diretto sulla qualità percepita. Più performano, più il
                    cliente è soddisfatto. Sono ciò che i clienti cercano esplicitamente e ciò che
                    determina la competitività.
                  </p>
                  <div className="example-box" style={{ borderColor: '#3b82f6' }}>
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
                          stroke="rgba(255,255,255,0.4)"
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
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="265"
                      y2="170"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      markerEnd="url(#a3)"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="30"
                      y2="15"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      markerEnd="url(#a3)"
                    />
                    <path
                      d="M30 160 Q148 100 265 40"
                      fill="none"
                      stroke="#3b82f6"
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
                    <text x="220" y="55" className="ts" fill="#3b82f6">
                      Lineare
                    </text>
                  </svg>
                </div>
              </div>
            )}

            {(isExporting || activeCategory === 'delighter') && (
              <div className={`cat-panel ${isExporting || activeCategory === 'delighter' ? 'active' : ''}`}>
                <div className="cat-info">
                  <h3>Delighter Features</h3>
                  <div className="aka">Anche dette: Attractive features</div>
                  <p>
                    Funzionalità inaspettate che sorprendono positivamente il cliente. Non sono
                    necessarie, ma quando presenti creano un forte vantaggio competitivo. I clienti
                    non sanno di volerle finché non le scoprono.
                  </p>
                  <div className="example-box" style={{ borderColor: '#10b981' }}>
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
                          stroke="rgba(255,255,255,0.4)"
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
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="265"
                      y2="170"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      markerEnd="url(#a4)"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="30"
                      y2="15"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      markerEnd="url(#a4)"
                    />
                    <path
                      d="M30 95 Q80 92 160 80 Q220 55 265 25"
                      fill="none"
                      stroke="#10b981"
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
                    <text x="200" y="42" className="ts" fill="#10b981">
                      Wow effect!
                    </text>
                    <text x="75" y="110" className="ts">
                      Neutrale se assente
                    </text>
                  </svg>
                </div>
              </div>
            )}

            {(isExporting || activeCategory === 'indifferent') && (
              <div className={`cat-panel ${isExporting || activeCategory === 'indifferent' ? 'active' : ''}`}>
                <div className="cat-info">
                  <h3>Indifferent Features</h3>
                  <div className="aka">Nessun impatto sulla soddisfazione</div>
                  <p>
                    Funzionalità che i clienti non notano né in positivo né in negativo. Possono
                    essere utili internamente al team, ma non influenzano la percezione del prodotto
                    né le decisioni d'acquisto.
                  </p>
                  <div className="example-box" style={{ borderColor: '#9ca3af' }}>
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
                          stroke="rgba(255,255,255,0.4)"
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
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="265"
                      y2="170"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      markerEnd="url(#a5)"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="30"
                      y2="15"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      markerEnd="url(#a5)"
                    />
                    <path
                      d="M30 100 L265 100"
                      fill="none"
                      stroke="#9ca3af"
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
                    <text x="148" y="88" className="ts" fill="#9ca3af" textAnchor="middle">
                      Nessun impatto
                    </text>
                  </svg>
                </div>
              </div>
            )}

            {(isExporting || activeCategory === 'dissatisfying') && (
              <div className={`cat-panel ${isExporting || activeCategory === 'dissatisfying' ? 'active' : ''}`}>
                <div className="cat-info">
                  <h3>Dissatisfying Features</h3>
                  <div className="aka">Anche dette: Reverse features</div>
                  <p>
                    Funzionalità che riducono la soddisfazione man mano che vengono implementate. Più
                    vengono aggiunte, peggio è. Spesso si tratta di complessità inutile o di
                    funzionalità non desiderate.
                  </p>
                  <div className="example-box" style={{ borderColor: '#f59e0b' }}>
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
                          stroke="rgba(255,255,255,0.4)"
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
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="265"
                      y2="170"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      markerEnd="url(#a6)"
                    />
                    <line
                      x1="30"
                      y1="170"
                      x2="30"
                      y2="15"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      markerEnd="url(#a6)"
                    />
                    <path
                      d="M30 60 Q100 80 160 100 Q220 120 265 148"
                      fill="none"
                      stroke="#f59e0b"
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
                    <text x="60" y="52" className="ts" fill="#f59e0b">
                      Più = peggio
                    </text>
                  </svg>
                </div>
              </div>
            )}
          </div>
        )}

        {(isExporting || activeSection === 'survey') && (
          <div className={`ksection ${isExporting || activeSection === 'survey' ? 'active' : ''}`}>
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
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.1)"
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
                <rect x="10" y="50" width="95" height="34" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="57.5" y="71" className="ts" textAnchor="middle">Mi piace</text>
                <rect x="110" y="50" width="100" height="34" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="160" y="71" className="ts" fill="#9ca3af" textAnchor="middle">Questionable</text>
                <rect x="215" y="50" width="100" height="34" rx="4" fill="rgba(16, 185, 129, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="265" y="71" className="ts" fill="#10b981" textAnchor="middle">Delighter</text>
                <rect x="320" y="50" width="100" height="34" rx="4" fill="rgba(16, 185, 129, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="370" y="71" className="ts" fill="#10b981" textAnchor="middle">Delighter</text>
                <rect x="425" y="50" width="100" height="34" rx="4" fill="rgba(16, 185, 129, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="475" y="71" className="ts" fill="#10b981" textAnchor="middle">Delighter</text>
                <rect x="530" y="50" width="100" height="34" rx="4" fill="rgba(59, 130, 246, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="580" y="71" className="ts" fill="#3b82f6" textAnchor="middle">Performance</text>

                {/* Row 2 */}
                <rect x="10" y="89" width="95" height="34" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="57.5" y="110" className="ts" textAnchor="middle">Me lo aspetto</text>
                <rect x="110" y="89" width="100" height="34" rx="4" fill="rgba(245, 158, 11, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="160" y="110" className="ts" fill="#f59e0b" textAnchor="middle">Dissatisfying</text>
                <rect x="215" y="89" width="100" height="34" rx="4" fill="rgba(156, 163, 175, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="265" y="110" className="ts" fill="#9ca3af" textAnchor="middle">Indifferent</text>
                <rect x="320" y="89" width="100" height="34" rx="4" fill="rgba(156, 163, 175, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="370" y="110" className="ts" fill="#9ca3af" textAnchor="middle">Indifferent</text>
                <rect x="425" y="89" width="100" height="34" rx="4" fill="rgba(156, 163, 175, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="475" y="110" className="ts" fill="#9ca3af" textAnchor="middle">Indifferent</text>
                <rect x="530" y="89" width="100" height="34" rx="4" fill="rgba(239, 68, 68, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="580" y="110" className="ts" fill="#ef4444" textAnchor="middle">Must-be</text>

                {/* Row 3 */}
                <rect x="10" y="128" width="95" height="34" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="57.5" y="149" className="ts" textAnchor="middle">Neutrale</text>
                <rect x="110" y="128" width="100" height="34" rx="4" fill="rgba(245, 158, 11, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="160" y="149" className="ts" fill="#f59e0b" textAnchor="middle">Dissatisfying</text>
                <rect x="215" y="128" width="100" height="34" rx="4" fill="rgba(156, 163, 175, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="265" y="149" className="ts" fill="#9ca3af" textAnchor="middle">Indifferent</text>
                <rect x="320" y="128" width="100" height="34" rx="4" fill="rgba(156, 163, 175, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="370" y="149" className="ts" fill="#9ca3af" textAnchor="middle">Indifferent</text>
                <rect x="425" y="128" width="100" height="34" rx="4" fill="rgba(156, 163, 175, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="475" y="149" className="ts" fill="#9ca3af" textAnchor="middle">Indifferent</text>
                <rect x="530" y="128" width="100" height="34" rx="4" fill="rgba(239, 68, 68, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="580" y="149" className="ts" fill="#ef4444" textAnchor="middle">Must-be</text>

                {/* Row 4 */}
                <rect x="10" y="167" width="95" height="34" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="57.5" y="188" className="ts" textAnchor="middle">Lo tollero</text>
                <rect x="110" y="167" width="100" height="34" rx="4" fill="rgba(245, 158, 11, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="160" y="188" className="ts" fill="#f59e0b" textAnchor="middle">Dissatisfying</text>
                <rect x="215" y="167" width="100" height="34" rx="4" fill="rgba(156, 163, 175, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="265" y="188" className="ts" fill="#9ca3af" textAnchor="middle">Indifferent</text>
                <rect x="320" y="167" width="100" height="34" rx="4" fill="rgba(156, 163, 175, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="370" y="188" className="ts" fill="#9ca3af" textAnchor="middle">Indifferent</text>
                <rect x="425" y="167" width="100" height="34" rx="4" fill="rgba(156, 163, 175, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="475" y="188" className="ts" fill="#9ca3af" textAnchor="middle">Indifferent</text>
                <rect x="530" y="167" width="100" height="34" rx="4" fill="rgba(239, 68, 68, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="580" y="188" className="ts" fill="#ef4444" textAnchor="middle">Must-be</text>

                {/* Row 5 */}
                <rect x="10" y="206" width="95" height="34" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="57.5" y="227" className="ts" textAnchor="middle">Non mi piace</text>
                <rect x="110" y="206" width="100" height="34" rx="4" fill="rgba(245, 158, 11, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="160" y="227" className="ts" fill="#f59e0b" textAnchor="middle">Dissatisfying</text>
                <rect x="215" y="206" width="100" height="34" rx="4" fill="rgba(245, 158, 11, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="265" y="227" className="ts" fill="#f59e0b" textAnchor="middle">Dissatisfying</text>
                <rect x="320" y="206" width="100" height="34" rx="4" fill="rgba(245, 158, 11, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="370" y="227" className="ts" fill="#f59e0b" textAnchor="middle">Dissatisfying</text>
                <rect x="425" y="206" width="100" height="34" rx="4" fill="rgba(245, 158, 11, 0.25)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="475" y="227" className="ts" fill="#f59e0b" textAnchor="middle">Dissatisfying</text>
                <rect x="530" y="206" width="100" height="34" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="580" y="227" className="ts" fill="#9ca3af" textAnchor="middle">Questionable</text>

                <text x="320" y="265" className="ts" textAnchor="middle">
                  Riga = risposta domanda funzionale · Colonna = risposta domanda disfunzionale
                </text>
              </svg>
            </div>

            <div
              style={{
                maxWidth: '640px',
                margin: '1.5rem auto 0',
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
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    marginBottom: '5px',
                  }}
                >
                  Questionable
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  Risposte contraddittorie (es. "Mi piace" sia se la feature c'è, sia se manca). Spesso indica che la domanda è stata fraintesa o compilata in modo errato.
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
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    marginBottom: '5px',
                  }}
                >
                  Dissatisfying
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  Funzionalità che generano insoddisfazione se presenti e soddisfazione se assenti. Il cliente preferisce esplicitamente che questa caratteristica non ci sia.
                </p>
              </div>
            </div>

            <div
              style={{
                maxWidth: '640px',
                margin: '1.5rem auto 0',
                border: '0.5px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '16px',
              }}
            >
              <h4
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--color-text-primary)',
                  marginBottom: '8px',
                }}
              >
                Evoluzione nel tempo
              </h4>
              <svg width="100%" viewBox="0 0 600 70" xmlns="http://www.w3.org/2000/svg">
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
                      stroke="rgba(255,255,255,0.6)"
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
                  fill="rgba(16, 185, 129, 0.25)"
                  stroke="rgba(16, 185, 129, 0.4)"
                  strokeWidth="0.5"
                />
                <text x="65" y="40" className="ts" fill="#10b981" textAnchor="middle">
                  Delighter
                </text>
                <line
                  x1="122"
                  y1="36"
                  x2="168"
                  y2="36"
                  stroke="rgba(255,255,255,0.6)"
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
                  fill="rgba(59, 130, 246, 0.25)"
                  stroke="rgba(59, 130, 246, 0.4)"
                  strokeWidth="0.5"
                />
                <text x="225" y="40" className="ts" fill="#3b82f6" textAnchor="middle">
                  Performance
                </text>
                <line
                  x1="282"
                  y1="36"
                  x2="328"
                  y2="36"
                  stroke="rgba(255,255,255,0.6)"
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
                  fill="rgba(239, 68, 68, 0.25)"
                  stroke="rgba(239, 68, 68, 0.4)"
                  strokeWidth="0.5"
                />
                <text x="385" y="40" className="ts" fill="#ef4444" textAnchor="middle">
                  Must-be
                </text>
                <text x="450" y="36" className="ts" textAnchor="start">
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
                must-be. Es: bottigliette di shampoo in hotel.
              </p>
            </div>
          </div>
        )}

        {(isExporting || activeSection === 'proscons') && (
          <div className={`ksection ${isExporting || activeSection === 'proscons' ? 'active' : ''}`}>
            <div className="pc-grid">
              <div className="pc-card" style={{ borderColor: 'rgba(16, 185, 129, 0.4)' }}>
                <h3 style={{ color: '#10b981' }}>Vantaggi</h3>
                <ul>
                  <li data-icon="✓">Identifica e prioritizza i bisogni del cliente</li>
                  <li data-icon="✓">Rivela quali funzionalità creano più valore</li>
                  <li data-icon="✓">Aumenta soddisfazione e fidelizzazione</li>
                  <li data-icon="✓">Ottimizza le risorse verso ciò che conta</li>
                  <li data-icon="✓">Individua opportunità di innovazione</li>
                </ul>
              </div>
              <div className="pc-card" style={{ borderColor: 'rgba(239, 68, 68, 0.4)' }}>
                <h3 style={{ color: '#ef4444' }}>Limiti</h3>
                <ul>
                  <li data-icon="✗">
                    <span className="group relative cursor-help inline-block">
                      <span className="border-b border-dotted" style={{ borderColor: 'var(--color-text-tertiary)' }}>Non considera costo e fattibilità</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-[#0a1628] border border-[#c9a96e]/40 rounded text-[11px] leading-tight text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 text-center shadow-lg pointer-events-none">
                        Integra il modello Kano con una matrice Costo/Valore o stime di effort.
                      </div>
                    </span>
                  </li>
                  <li data-icon="✗">
                    <span className="group relative cursor-help inline-block">
                      <span className="border-b border-dotted" style={{ borderColor: 'var(--color-text-tertiary)' }}>Non spiega il "perché" di una priorità</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-[#0a1628] border border-[#c9a96e]/40 rounded text-[11px] leading-tight text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 text-center shadow-lg pointer-events-none">
                        Abbina il questionario a interviste qualitative per comprendere le motivazioni profonde.
                      </div>
                    </span>
                  </li>
                  <li data-icon="✗">
                    <span className="group relative cursor-help inline-block">
                      <span className="border-b border-dotted" style={{ borderColor: 'var(--color-text-tertiary)' }}>Difficile applicare con clienti eterogenei</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-[#0a1628] border border-[#c9a96e]/40 rounded text-[11px] leading-tight text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 text-center shadow-lg pointer-events-none">
                        Segmenta gli utenti prima dell'analisi (es. per persona o mercato) e crea grafici separati.
                      </div>
                    </span>
                  </li>
                  <li data-icon="✗">
                    <span className="group relative cursor-help inline-block">
                      <span className="border-b border-dotted" style={{ borderColor: 'var(--color-text-tertiary)' }}>Scope limitato: solo prospettiva cliente</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-[#0a1628] border border-[#c9a96e]/40 rounded text-[11px] leading-tight text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 text-center shadow-lg pointer-events-none">
                        Affianca Kano ad analisi di business (es. ROI, allineamento strategico) per una visione olistica.
                      </div>
                    </span>
                  </li>
                  <li data-icon="✗">
                    <span className="group relative cursor-help inline-block">
                      <span className="border-b border-dotted" style={{ borderColor: 'var(--color-text-tertiary)' }}>La timeline non considera tempi di feedback prolungati</span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-[#0a1628] border border-[#c9a96e]/40 rounded text-[11px] leading-tight text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 text-center shadow-lg pointer-events-none">
                        Pianifica buffer di tempo per la raccolta dati e usa solleciti automatizzati per velocizzare le risposte.
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{
                maxWidth: '640px',
                margin: '0 auto',
                border: '0.5px solid rgba(255,255,255,0.1)',
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

        {(isExporting || activeSection === 'tips') && (
          <div className={`ksection ${isExporting || activeSection === 'tips' ? 'active' : ''}`}>
            <p className="section-title">Best Practice per l'analisi Kano</p>
            <p className="section-sub">Consigli per usare il modello in modo efficace</p>
            <div className="tips-list">
              <div className="tip-item">
                <div className="tip-num">1</div>
                <p>
                  Prima risolvi le <strong>must-be features</strong> e le{' '}
                  <strong>performance features</strong>, poi usa i delighter per differenziarti dalla
                  concorrenza.
                </p>
              </div>
              <div className="tip-item">
                <div className="tip-num">2</div>
                <p>
                  Aggiorna l'analisi regolarmente: i bisogni cambiano nel tempo. Un delighter di
                  oggi sarà una must-be feature domani.
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
