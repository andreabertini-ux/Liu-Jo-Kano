import { useState } from 'react';
import { Lightbulb, FileText, Send, BarChart2, Users, MapPin, Target, ShoppingBag, PieChart, ListOrdered, AlertCircle, TrendingUp, Sparkles } from 'lucide-react';

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-q" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className={`faq-arrow ${isOpen ? 'open' : ''}`}>↓</span>
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>{answer}</div>
    </div>
  );
}

function ActivityItem({ icon, title, description, isOpen, onClick }: { icon: React.ReactNode; title: string; description: React.ReactNode; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="faq-item">
      <button className="faq-q" onClick={onClick}>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div className="step-num">{icon}</div>
          <div className="step-title" style={{ margin: 0 }}>{title}</div>
        </div>
        <span className={`faq-arrow ${isOpen ? 'open' : ''}`}>↓</span>
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`} style={{ paddingLeft: '60px', paddingBottom: '24px' }}>
        <div className="step-desc">{description}</div>
      </div>
    </div>
  );
}

export default function Proposta({ isExporting }: { isExporting?: boolean }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openActivity, setOpenActivity] = useState<number | null>(null);

  const toggleActivity = (idx: number) => {
    if (openActivity === idx) {
      setOpenActivity(null);
    } else {
      setOpenActivity(idx);
    }
  };

  const tabs = [
    '01 · Cover',
    '02 · Obiettivi',
    '03 · Attività',
    '04 · Timeline',
    '05 · FAQ',
    '06 · Next steps',
    '07 · Follow-up',
    '08 · Thank you',
  ];

  return (
    <div className="top-pane active">
      {!isExporting && (
        <div className="deck-tab-bar">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`deck-tab-btn ${activeSlide === idx ? 'active' : ''}`}
              onClick={() => setActiveSlide(idx)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {(isExporting || activeSlide === 0) && (
        <div className={`slide ${isExporting || activeSlide === 0 ? 'active' : ''} cover`}>
          <div className="cover-top">
            <div className="cover-eyebrow">Arad · Scope of Work</div>
            <div className="cover-title">
              Omnichannel
              <br />
              Excellence
            </div>
            <div className="cover-sub">
              User Research & Kano Model
              <br />
              per Liu Jo
            </div>
            <div className="cover-meta">
              <div className="meta-item">
                Cliente<span>EXCELITE S.P.A</span>
              </div>
              <div className="meta-item">
                Progetto<span>OMNICHANNEL EXCELLENCE</span>
              </div>
              <div className="meta-item">
                Anno<span>2026</span>
              </div>
            </div>
          </div>
          <div className="cover-bar"></div>
        </div>
      )}

      {(isExporting || activeSlide === 1) && (
        <div className={`slide ${isExporting || activeSlide === 1 ? 'active' : ''}`}>
          <div className="slide-inner">
            <div className="slide-header">
              <div className="slide-num">02 · Obiettivi del progetto</div>
              <div className="slide-title">
                Cosa vogliamo <em>ottenere</em>
              </div>
            </div>
            <div className="divider"></div>
            <div className="goal-box">
              <p>
                Identificare una <strong style={{ fontWeight: 600 }}>lista prioritizzata</strong>,
                dal punto di vista del cliente finale, delle iniziative di{' '}
                <strong style={{ fontWeight: 600 }}>Omnichannel Excellence</strong> volte a elevare la
                Customer Experience in negozio, sfruttando le possibilità del digitale dove utili e
                rilevanti.
              </p>
              <div className="goal-tags">
                <span className="tag">Customer-centric</span>
                <span className="tag">Prioritizzazione Kano</span>
                <span className="tag">In-store experience</span>
                <span className="tag">Digital enablement</span>
                <span className="tag">Coinvolgimento Retail</span>
              </div>
            </div>
            <div
              style={{
                fontSize: '13px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                marginTop: '8px',
              }}
            >
              Il perimetro è volutamente focalizzato sull'
              <strong style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
                elevare l'esperienza in negozio
              </strong>{' '}
              - non sull'omnichannel in senso stretto - in accordo con l'orientamento dello stakeholder
              principale.
            </div>
          </div>
        </div>
      )}

      {(isExporting || activeSlide === 2) && (
        <div className={`slide ${isExporting || activeSlide === 2 ? 'active' : ''}`}>
          <div className="slide-inner">
            <div className="slide-header">
              <div className="slide-num">03 · Sequenza di attività</div>
              <div className="slide-title">
                Come <em>lo facciamo</em>
              </div>
            </div>
            <div className="divider"></div>
            <div className="steps faq-list">
              <ActivityItem
                icon={<Lightbulb size={18} />}
                title="Brainstorming AS IS + lista iniziative"
                description={
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                      Sessione di lavoro congiunta volta a mappare lo stato attuale dell'esperienza in negozio e a costruire collaborativamente la lista delle iniziative candidate. Il formato è progettato per essere strutturato ma non oneroso, favorendo il contributo autentico di tutti gli stakeholder.
                    </div>
                    <div className="fu-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                      <div style={{ background: 'var(--color-background-secondary)', padding: '16px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border-secondary)' }}>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}><Users size={16} /> Team</div>
                        <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>ARAD, CRM/Omnichannel e Retail</div>
                      </div>
                      <div style={{ background: 'var(--color-background-secondary)', padding: '16px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border-secondary)' }}>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> Focus AS-IS</div>
                        <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>Mappatura dell'esperienza attuale in store e dei vari pain points.</div>
                      </div>
                      <div style={{ background: 'var(--color-background-secondary)', padding: '16px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border-secondary)' }}>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}><Lightbulb size={16} /> Output</div>
                        <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>Lista grezza di iniziative candidate da poter testare.</div>
                      </div>
                    </div>
                  </div>
                }
                isOpen={openActivity === 0}
                onClick={() => toggleActivity(0)}
              />
              <ActivityItem
                icon={<FileText size={18} />}
                title="Creazione del survey in formato Kano"
                description={
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                      Strutturazione del questionario per tradurre le iniziative in duplici domande (funzionali e disfunzionali) secondo il modello Kano, permettendo di misurare obiettivamente l'impatto sulla Customer Satisfaction.
                    </div>
                    <div className="fu-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                      <div style={{ background: 'var(--color-background-secondary)', padding: '16px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border-secondary)', borderTop: '3px solid #ef4444' }}>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}><AlertCircle size={16} color="#ef4444" /> Must-be</div>
                        <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>Imprescindibili. Se mancano generano forte insoddisfazione, ma non aumentano la fedeltà oltre la sufficienza.</div>
                      </div>
                      <div style={{ background: 'var(--color-background-secondary)', padding: '16px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border-secondary)', borderTop: '3px solid #3b82f6' }}>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}><TrendingUp size={16} color="#3b82f6" /> Performance</div>
                        <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>Variabili di competizione. Più la performance è alta, maggiore è la soddisfazione in modo proporzionale.</div>
                      </div>
                      <div style={{ background: 'var(--color-background-secondary)', padding: '16px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border-secondary)', borderTop: '3px solid #10b981' }}>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}><Sparkles size={16} color="#10b981" /> Delighter</div>
                        <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>Sorprese positive. Se mancano nessuno se ne accorge, se presenti creano un "effetto wow" esponenziale.</div>
                      </div>
                    </div>
                    <div style={{ background: 'rgba(201, 169, 110, 0.05)', padding: '16px', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(201, 169, 110, 0.2)' }}>
                      <div style={{ color: 'var(--color-accent-gold)', fontWeight: 600, marginBottom: '8px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Validazione Congiunta</div>
                      <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>Il questionario viene condiviso con il team Liu Jo per ricezione feedback, affinamento e validazione finale prima del lancio formale.</div>
                    </div>
                  </div>
                }
                isOpen={openActivity === 1}
                onClick={() => toggleActivity(1)}
              />
              <ActivityItem
                icon={<Send size={18} />}
                title="Somministrazione del sondaggio"
                description={
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      È stato scelto di intervistare due target di clienti: <strong>Attuali</strong> e <strong>Target</strong>.
                    </div>
                    <div className="fu-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div style={{ background: 'var(--color-background-secondary)', padding: '16px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border-secondary)' }}>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}><Target size={16} /> Clienti Target</div>
                        <div style={{ fontSize: '13px', marginBottom: '8px' }}>Mercati e relativi costi medi stima (per raccolta 200 risposte valide):</div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '4px', color: 'var(--color-text-secondary)' }}>
                          <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border-tertiary)', paddingBottom: '4px' }}><span>Italia</span> <span>~1000€</span></li>
                          <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border-tertiary)', paddingBottom: '4px' }}><span>Spagna</span> <span>~900€</span></li>
                          <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border-tertiary)', paddingBottom: '4px' }}><span>Francia</span> <span>~1200€</span></li>
                          <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border-tertiary)', paddingBottom: '4px' }}><span>Polonia*</span> <span>~1000€</span></li>
                          <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Belgio</span> <span>~1600€</span></li>
                        </ul>
                        <div style={{ fontSize: '10px', marginTop: '8px', color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>* English speakers</div>
                      </div>
                      <div style={{ background: 'var(--color-background-secondary)', padding: '16px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border-secondary)' }}>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}><ShoppingBag size={16} /> Clienti Attuali</div>
                        <div style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--color-text-secondary)' }}>
                          Sono previsti <strong>2 gg/uomo</strong> di raccolta on-field in negozio (modalità/negozi da concordarsi).
                        </div>
                      </div>
                    </div>
                    <div style={{ background: 'rgba(201, 169, 110, 0.05)', padding: '16px', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(201, 169, 110, 0.2)' }}>
                      <div style={{ color: 'var(--color-accent-gold)', fontWeight: 600, marginBottom: '8px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Raccomandazioni ARAD</div>
                      <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                        <li>Organizzare una raccolta complementare "digital" (gratuita) e integrativa per aumentare la statisticità del pool (es. QR code con sconto esposto in negozi scelti).</li>
                        <li>Lasciare i multimarca fisici out-of-scope per minore controllo sull'esperienza overall e per velocizzare la fase di raccolta.</li>
                      </ul>
                    </div>
                  </div>
                }
                isOpen={openActivity === 2}
                onClick={() => toggleActivity(2)}
              />
              <ActivityItem
                icon={<BarChart2 size={18} />}
                title="Aggregazione dei risultati e lista prioritizzata"
                description={
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                      Elaborazione dei dati raccolti tramite classificazione statistica, costruzione del visual Kano e produzione della lista finale di iniziative strategiche. Le risposte dei due campioni (Attuali e Target) vengono pesate per garantire evidenze oggettive in ottica di espansione.
                    </div>
                    <div className="fu-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div style={{ background: 'var(--color-background-secondary)', padding: '16px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border-secondary)' }}>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}><PieChart size={16} /> Visual Kano</div>
                        <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                          Mappatura delle iniziative su un asse (soddisfazione vs funzionalità). Permette ai decision maker di avere una panoramica immediata e visiva di cosa conta realmente per il cliente finale.
                        </div>
                      </div>
                      <div style={{ background: 'var(--color-background-secondary)', padding: '16px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border-secondary)' }}>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}><ListOrdered size={16} /> Lista Prioritizzata</div>
                        <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                          Deliverable finale: iniziative ordinate in modo prescrittivo, focalizzandosi in primis sui "must-be", poi sulle performance ad alto impatto, valutando l'inserimento dei "delighter".
                        </div>
                      </div>
                    </div>
                  </div>
                }
                isOpen={openActivity === 3}
                onClick={() => toggleActivity(3)}
              />
            </div>
          </div>
        </div>
      )}

      {(isExporting || activeSlide === 3) && (
        <div className={`slide ${isExporting || activeSlide === 3 ? 'active' : ''}`}>
          <div className="slide-inner">
            <div className="slide-header">
              <div className="slide-num">04 · Timeline</div>
              <div className="slide-title">
                Tempistiche <em>indicative</em>
              </div>
            </div>
            <div className="divider"></div>
            <div className="timeline-visual" style={{ marginBottom: '32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '140px repeat(8, 1fr)', gap: '4px', fontSize: '10px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '8px', borderBottom: '1px solid var(--color-border-tertiary)' }}>
                <div>Fase</div>
                <div style={{ textAlign: 'center' }}>W1</div>
                <div style={{ textAlign: 'center' }}>W2</div>
                <div style={{ textAlign: 'center' }}>W3</div>
                <div style={{ textAlign: 'center' }}>W4</div>
                <div style={{ textAlign: 'center' }}>W5</div>
                <div style={{ textAlign: 'center' }}>W6</div>
                <div style={{ textAlign: 'center' }}>W7</div>
                <div style={{ textAlign: 'center' }}>W8</div>
              </div>

              {/* 0 - Kickoff */}
              <div style={{ display: 'grid', gridTemplateColumns: '140px repeat(8, 1fr)', gap: '4px', alignItems: 'center', padding: '12px 0', borderBottom: '0.5px solid var(--color-border-tertiary)' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-primary)' }}>1 · Kickoff</div>
                <div style={{ gridColumn: '2 / 4', background: 'var(--color-accent-gold)', height: '20px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'white', fontWeight: 600 }}>2 sett.</div>
              </div>

              {/* 1 - Survey */}
              <div style={{ display: 'grid', gridTemplateColumns: '140px repeat(8, 1fr)', gap: '4px', alignItems: 'center', padding: '12px 0', borderBottom: '0.5px solid var(--color-border-tertiary)' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-primary)' }}>2 · Survey ecc.</div>
                <div style={{ gridColumn: '4 / 6', background: 'rgba(201, 169, 110, 0.8)', height: '20px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'white', fontWeight: 600 }}>2 sett.</div>
              </div>

              {/* 2 - Field */}
              <div style={{ display: 'grid', gridTemplateColumns: '140px repeat(8, 1fr)', gap: '4px', alignItems: 'center', padding: '12px 0', borderBottom: '0.5px solid var(--color-border-tertiary)' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-primary)' }}>3 · Field ecc.</div>
                <div style={{ gridColumn: '6 / 8', background: 'rgba(201, 169, 110, 0.6)', height: '20px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'white', fontWeight: 600 }}>2 sett.</div>
              </div>

              {/* 3 - Analisi */}
              <div style={{ display: 'grid', gridTemplateColumns: '140px repeat(8, 1fr)', gap: '4px', alignItems: 'center', padding: '12px 0' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-primary)' }}>4 · Analisi ecc.</div>
                <div style={{ gridColumn: '8 / 10', background: 'rgba(201, 169, 110, 0.4)', height: '20px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'var(--color-text-primary)', fontWeight: 600 }}>2 sett.</div>
              </div>
            </div>

            <div className="timeline">
              <div className="tl-row">
                <div className="tl-phase">1 · Kickoff</div>
                <div>
                  <div className="tl-title">Avvio progetto & Setup</div>
                  <div className="tl-dur">2 settimane</div>
                  <div className="tl-items">
                    <span style={{ fontSize: '10px', background: 'var(--color-background-secondary)', padding: '2px 6px', borderRadius: '4px', marginRight: '4px', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border-secondary)' }}>ARAD</span>
                    <span style={{ fontSize: '10px', background: 'var(--color-background-secondary)', padding: '2px 6px', borderRadius: '4px', marginRight: '8px', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border-secondary)' }}>LIU JO</span>
                    Presentazione obiettivi e modalità operative, brainstorming con mappatura as-is e generazione lista iniziative
                  </div>
                </div>
              </div>
              <div className="tl-row">
                <div className="tl-phase">2 · Survey</div>
                <div>
                  <div className="tl-title">Costruzione survey Kano</div>
                  <div className="tl-dur">2 settimane</div>
                  <div className="tl-items">
                    <span style={{ fontSize: '10px', background: 'var(--color-background-secondary)', padding: '2px 6px', borderRadius: '4px', marginRight: '8px', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border-secondary)' }}>ARAD</span>
                    Strutturazione domande, revisione interna, approvazione Liu Jo
                  </div>
                </div>
              </div>
              <div className="tl-row">
                <div className="tl-phase">3 · Field</div>
                <div>
                  <div className="tl-title">Field - somministrazione</div>
                  <div className="tl-dur">2 settimane</div>
                  <div className="tl-items">
                    <span style={{ fontSize: '10px', background: 'var(--color-background-secondary)', padding: '2px 6px', borderRadius: '4px', marginRight: '8px', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border-secondary)' }}>ARAD</span>
                    Raccolta risposte (remoto / in persona TBD), monitoraggio completamento campione
                  </div>
                </div>
              </div>
              <div className="tl-row">
                <div className="tl-phase">4 · Analisi</div>
                <div>
                  <div className="tl-title">Analisi & deliverable</div>
                  <div className="tl-dur">2 settimane</div>
                  <div className="tl-items">
                    <span style={{ fontSize: '10px', background: 'var(--color-background-secondary)', padding: '2px 6px', borderRadius: '4px', marginRight: '8px', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border-secondary)' }}>ARAD</span>
                    Aggregazione dati, visual Kano, lista prioritizzata, presentazione finale
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-note">
              <strong>Totale stimato:</strong> 8 settimane dal kickoff. Da raffinare con il team
              dopo il kick-off. I follow-up (se attivati) si aggiungono in coda sequenzialmente.
              La timeline non considera tempi di feedback prolungati.
            </div>
          </div>
        </div>
      )}

      {(isExporting || activeSlide === 4) && (
        <div className={`slide ${isExporting || activeSlide === 4 ? 'active' : ''}`}>
          <div className="slide-inner">
            <div className="slide-header">
              <div className="slide-num">05 · Domande frequenti</div>
              <div className="slide-title">
                FAQ <em>del progetto</em>
              </div>
            </div>
            <div className="divider"></div>
            <div className="faq-list">
              <FaqItem
                question="Perché il modello Kano e non una semplice survey di priorità?"
                answer="Il modello Kano permette di distinguere tra ciò che il cliente dà per scontato (must-be), ciò che apprezza se presente (performance) e ciò che lo sorprende positivamente (delighter). Una semplice survey di priorità non cattura questa dimensione qualitativa, fondamentale per allocare correttamente gli investimenti."
              />
              <FaqItem
                question="Come viene coinvolto il team Retail di Liu Jo?"
                answer="Il Retail viene coinvolto nel brainstorming iniziale (fase 1) per contribuire alla lista delle iniziative candidate, e successivamente nelle fasi di validazione del survey e di condivisione dei risultati. Il coinvolgimento è progettato per essere leggero e non oneroso: partecipazione a sessioni strutturate, nessun lavoro autonomo aggiuntivo richiesto."
              />
              <FaqItem
                question="Qual è il deliverable finale del progetto core?"
                answer="Una lista prioritizzata di iniziative di Omnichannel Excellence, corredata da un visual Kano che mostra la distribuzione delle iniziative per categoria (must-be, performance, delighter). È un output molto operativo e in linea con le richieste degli stakeholder."
              />
              <FaqItem
                question="Il sondaggio viene somministrato in persona o da remoto?"
                answer="La modalità è da definire insieme a Liu Jo (TBD). Entrambe le opzioni sono percorribili: da remoto tramite link digitale, oppure in persona in negozio tramite tablet o carta. La scelta impatta tempi e costi di field ma non la qualità del metodo."
              />
            </div>
          </div>
        </div>
      )}

      {(isExporting || activeSlide === 5) && (
        <div className={`slide ${isExporting || activeSlide === 5 ? 'active' : ''}`}>
          <div className="slide-inner">
            <div className="slide-header">
              <div className="slide-num">06 · Prossimi passi</div>
              <div className="slide-title">
                Da qui, <em>cosa succede</em>
              </div>
            </div>
            <div className="divider"></div>
            <div className="nextsteps">
              <div className="ns-row">
                <div className="ns-num">1</div>
                <div className="ns-text">
                  <strong>Approvazione Scope of Work</strong> <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginLeft: '8px', padding: '2px 6px', background: 'var(--color-background-secondary)', borderRadius: '4px' }}>entro il 5 maggio</span> - Condivisione della proposta per
                  approvazione di approccio, scope e timeline, e conferma finale su mercati, target e modalità di raccolta.
                </div>
              </div>
              <div className="ns-row">
                <div className="ns-num">2</div>
                <div className="ns-text">
                  <strong>Kick-off del progetto e Brainstorming</strong> <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginLeft: '8px', padding: '2px 6px', background: 'var(--color-background-secondary)', borderRadius: '4px' }}>13-15 maggio</span> - Avvio delle attività a seguito di accettazione: setup degli strumenti, definizione del panel target e incontro congiunto con il team CRM/Omnichannel e Retail per mappare lo stato attuale e costruire la lista delle iniziative candidate.
                </div>
              </div>
              <div className="ns-row">
                <div className="ns-num">3</div>
                <div className="ns-text">
                  <strong>Co-creazione e validazione del questionario</strong> <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginLeft: '8px', padding: '2px 6px', background: 'var(--color-background-secondary)', borderRadius: '4px' }}>dal 3 giugno</span> - Dopo il brainstorming, prevediamo uno step congiunto per strutturare (ARAD), testare e approvare (Liu Jo) definitivamente le domande esatte prima di somministrarle ai clienti.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {(isExporting || activeSlide === 6) && (
        <div className={`slide ${isExporting || activeSlide === 6 ? 'active' : ''}`}>
          <div className="slide-inner">
            <div className="slide-header">
              <div className="slide-num">07 · Possibili follow-up</div>
              <div className="slide-title">
                Possibili sviluppi <em>a seguire</em>
              </div>
            </div>
            <div className="divider"></div>
            <div className="followup-grid">
              <div className="fu-card">
                <div className="fu-icon">Follow-up A</div>
                <div className="fu-title">Disegno flussi per iniziative tecniche</div>
                <div className="fu-desc">
                  Progettazione di flussi ad hoc per le iniziative che risultano prettamente tecniche
                  o che, per la loro complessità, richiedono una definizione procedurale dettagliata
                  prima dell'implementazione.
                </div>
              </div>
              <div className="fu-card">
                <div className="fu-icon">Follow-up B</div>
                <div className="fu-title">POC · Definizione, esecuzione e analisi</div>
                <div className="fu-desc">
                  Supporto o gestione diretta nella creazione e nell'esecuzione di Proof of Concept
                  sulle iniziative prioritarie, con successiva analisi dei risultati conseguiti e
                  raccomandazioni.
                </div>
              </div>
            </div>
            <div className="fu-note" style={{ marginTop: '16px' }}>
              <strong>Nota:</strong> i follow-up rappresentano possibili approfondimenti naturali,
              attivabili selettivamente a seconda delle priorità emerse dalla ricerca e dei desiderata
              del cliente. Ciascuno è indipendente e modulare.
            </div>
          </div>
        </div>
      )}

      {(isExporting || activeSlide === 7) && (
        <div className={`slide ${isExporting || activeSlide === 7 ? 'active' : ''} thankyou`}>
          <div className="ty-left">
            <div className="ty-line"></div>
            <div className="ty-title">Grazie</div>
            <div className="ty-sub">
              Siamo pronti a portare la voce del cliente al centro delle decisioni strategiche di Liu
              Jo.
            </div>
            <div className="ty-line"></div>
            <div className="ty-contact">Arad · 2026</div>
          </div>
          <div className="ty-divider"></div>
          <div className="ty-right">
            <div className="ty-contact-decor"></div>
            <div className="ty-contact-name">Andrea Bertini</div>
            <div className="ty-contact-role">Product & Service Design Lead | Omnichannel Experience Strategist</div>
            <div className="ty-contact-email">andrea.bertini@arad.digital</div>
          </div>
        </div>
      )}
    </div>
  );
}
