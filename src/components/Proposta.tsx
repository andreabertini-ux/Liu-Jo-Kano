import { useState } from 'react';

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

export default function Proposta() {
  const [activeSlide, setActiveSlide] = useState(0);

  const tabs = [
    '01 · Cover',
    '02 · Obiettivi',
    '03 · Attività',
    '04 · Follow-up',
    '05 · Timeline',
    '06 · FAQ',
    '07 · Next steps',
    '08 · Thank you',
  ];

  return (
    <div className="top-pane active">
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

      {activeSlide === 0 && (
        <div className="slide active cover">
          <div className="cover-top">
            <div className="cover-eyebrow">Arad · Proposta progettuale</div>
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
                Cliente<span>Liu Jo S.p.A.</span>
              </div>
              <div className="meta-item">
                Progetto<span>Retail Excellence</span>
              </div>
              <div className="meta-item">
                Anno<span>2026</span>
              </div>
            </div>
          </div>
          <div className="cover-bar"></div>
        </div>
      )}

      {activeSlide === 1 && (
        <div className="slide active">
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
                Identificare una <strong style={{ fontWeight: 500 }}>lista prioritizzata</strong>,
                dal punto di vista del cliente finale, delle iniziative di{' '}
                <strong style={{ fontWeight: 500 }}>Omnichannel Excellence</strong> volte a elevare la
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
              <strong style={{ fontWeight: 500, color: 'var(--color-text-primary)' }}>
                elevare l'esperienza in negozio
              </strong>{' '}
              — non sull'omnichannel in senso ampio — in accordo con l'orientamento dello stakeholder
              principale. Il team Retail viene coinvolto fin dall'inizio in modalità partecipativa,
              leggera e non onerosa.
            </div>
          </div>
        </div>
      )}

      {activeSlide === 2 && (
        <div className="slide active">
          <div className="slide-inner">
            <div className="slide-header">
              <div className="slide-num">03 · Sequenza di attività</div>
              <div className="slide-title">
                Come <em>lo facciamo</em>
              </div>
            </div>
            <div className="divider"></div>
            <div className="steps">
              <div className="step">
                <div className="step-num">1</div>
                <div>
                  <div className="step-title">Brainstorming AS IS + lista iniziative</div>
                  <div className="step-desc">
                    Sessione congiunta ARAD · Elia · Retail per mappare lo stato attuale e generare
                    la lista delle iniziative candidate. Modalità collaborativa, poco faticosa ma
                    coinvolgente per tutti gli stakeholder.
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <div>
                  <div className="step-title">Creazione del survey in formato Kano</div>
                  <div className="step-desc">
                    Strutturazione del questionario secondo il modello Kano per identificare gli
                    elementi imprescindibili (must-be), migliorativi (performance) e delizianti
                    (attractive) dal punto di vista dei clienti finali.
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <div>
                  <div className="step-title">Somministrazione del sondaggio</div>
                  <div className="step-desc">
                    Raccolta delle risposte da clienti reali Liu Jo, da remoto o in persona (modalità
                    da definire). Target: campione rappresentativo del profilo cliente brand.
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="step-num">4</div>
                <div>
                  <div className="step-title">Aggregazione risultati e lista prioritizzata</div>
                  <div className="step-desc">
                    Elaborazione delle risposte, costruzione del visual Kano e produzione della lista
                    finale prioritizzata di iniziative — il deliverable principale del progetto.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSlide === 3 && (
        <div className="slide active">
          <div className="slide-inner">
            <div className="slide-header">
              <div className="slide-num">04 · Possibili follow-up</div>
              <div className="slide-title">
                Opportunità <em>on-top</em>
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
              <strong>Nota:</strong> i follow-up rappresentano naturali filoni di upsell,
              attivabili selettivamente a seconda delle priorità emerse dalla ricerca e dell'appetito
              del cliente. Ciascuno è indipendente e modulare.
            </div>
          </div>
        </div>
      )}

      {activeSlide === 4 && (
        <div className="slide active">
          <div className="slide-inner">
            <div className="slide-header">
              <div className="slide-num">05 · Timeline</div>
              <div className="slide-title">
                Tempistiche <em>indicative</em>
              </div>
            </div>
            <div className="divider"></div>
            <div className="timeline">
              <div className="tl-row">
                <div className="tl-phase">Fase 1</div>
                <div>
                  <div className="tl-title">Brainstorming & setup</div>
                  <div className="tl-dur">~1–2 settimane</div>
                  <div className="tl-items">
                    Kick-off, mappatura AS IS, generazione lista iniziative, allineamento con Retail
                  </div>
                </div>
              </div>
              <div className="tl-row">
                <div className="tl-phase">Fase 2</div>
                <div>
                  <div className="tl-title">Costruzione survey Kano</div>
                  <div className="tl-dur">~1 settimana</div>
                  <div className="tl-items">
                    Strutturazione domande, revisione interna, approvazione Liu Jo
                  </div>
                </div>
              </div>
              <div className="tl-row">
                <div className="tl-phase">Fase 3</div>
                <div>
                  <div className="tl-title">Field — somministrazione</div>
                  <div className="tl-dur">~2–3 settimane</div>
                  <div className="tl-items">
                    Raccolta risposte (remoto / in persona TBD), monitoraggio completamento campione
                  </div>
                </div>
              </div>
              <div className="tl-row">
                <div className="tl-phase">Fase 4</div>
                <div>
                  <div className="tl-title">Analisi & deliverable</div>
                  <div className="tl-dur">~1–2 settimane</div>
                  <div className="tl-items">
                    Aggregazione dati, visual Kano, lista prioritizzata, presentazione finale
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-note">
              <strong>Totale stimato:</strong> 5–8 settimane dalla firma. Da raffinare con il team
              dopo il kick-off. I follow-up (se attivati) si aggiungono in coda sequenzialmente.
            </div>
          </div>
        </div>
      )}

      {activeSlide === 5 && (
        <div className="slide active">
          <div className="slide-inner">
            <div className="slide-header">
              <div className="slide-num">06 · Domande frequenti</div>
              <div className="slide-title">
                FAQ <em>del progetto</em>
              </div>
            </div>
            <div className="divider"></div>
            <div className="faq-list">
              <FaqItem
                question="Perché il modello Kano e non una semplice survey di priorità?"
                answer="Il modello Kano permette di distinguere tra ciò che il cliente dà per scontato (must-be), ciò che apprezza se presente (performance) e ciò che lo sorprende positivamente (attractive). Una semplice survey di priorità non cattura questa dimensione qualitativa, fondamentale per allocare correttamente gli investimenti."
              />
              <FaqItem
                question="Come viene coinvolto il team Retail di Liu Jo?"
                answer="Il Retail viene coinvolto nel brainstorming iniziale (fase 1) per contribuire alla lista delle iniziative candidate. Il coinvolgimento è progettato per essere leggero e non oneroso: partecipazione a una sessione strutturata, nessun lavoro autonomo aggiuntivo richiesto."
              />
              <FaqItem
                question="Qual è il deliverable finale del progetto core?"
                answer="Una lista prioritizzata di iniziative di Omnichannel Excellence, corredata da un visual Kano che mostra la distribuzione delle iniziative per categoria (must-be, performance, attractive). È il deliverable esattamente richiesto da Elia e allineato con l'AD."
              />
              <FaqItem
                question="Il sondaggio viene somministrato in persona o da remoto?"
                answer="La modalità è da definire insieme a Liu Jo (TBD). Entrambe le opzioni sono percorribili: da remoto tramite link digitale, oppure in persona in negozio tramite tablet o carta. La scelta impatta tempi e costi di field ma non la qualità del metodo."
              />
              <FaqItem
                question="Perché si chiama &quot;Omnichannel Excellence&quot; e non &quot;Retail Excellence&quot;?"
                answer="Il nome &quot;Omnichannel Excellence&quot; è stato scelto per evitare sovrapposizioni percepite con i team Retail interni, riducendo potenziali resistenze. Il contenuto rimane focalizzato sull'esperienza in negozio, in linea con le indicazioni dell'AD."
              />
            </div>
          </div>
        </div>
      )}

      {activeSlide === 6 && (
        <div className="slide active">
          <div className="slide-inner">
            <div className="slide-header">
              <div className="slide-num">07 · Prossimi passi</div>
              <div className="slide-title">
                Da qui, <em>cosa succede</em>
              </div>
            </div>
            <div className="divider"></div>
            <div className="nextsteps">
              <div className="ns-row">
                <div className="ns-num">1</div>
                <div className="ns-text">
                  <strong>Allineamento interno ARAD</strong> — Revisione e validazione di questo
                  documento con il team. Raccolta di feedback e integrazioni prima della
                  presentazione al cliente.
                </div>
              </div>
              <div className="ns-row">
                <div className="ns-num">2</div>
                <div className="ns-text">
                  <strong>Presentazione a Elia</strong> — Condivisione della proposta per
                  approvazione di approccio, scope e timeline. Definizione della modalità di
                  coinvolgimento Retail.
                </div>
              </div>
              <div className="ns-row">
                <div className="ns-num">3</div>
                <div className="ns-text">
                  <strong>Proposta economica</strong> — Redazione e invio dell'offerta formale con
                  dettaglio di effort, tempistiche e costi. Inclusione opzionale dei follow-up come
                  voci separate.
                </div>
              </div>
              <div className="ns-row">
                <div className="ns-num">4</div>
                <div className="ns-text">
                  <strong>Kick-off del progetto</strong> — Avvio delle attività a seguito di
                  accettazione: pianificazione del brainstorming, setup degli strumenti e
                  definizione del panel di clienti target.
                </div>
              </div>
            </div>
            <div className="ns-cta">
              Nessuna decisione urgente richiesta al cliente in questa fase. Il prossimo step è la
              validazione interna del documento.
            </div>
          </div>
        </div>
      )}

      {activeSlide === 7 && (
        <div className="slide active thankyou">
          <div className="ty-line"></div>
          <div className="ty-title">Grazie</div>
          <div className="ty-sub">
            Siamo pronti a portare la voce del cliente al centro delle decisioni strategiche di Liu
            Jo.
          </div>
          <div className="ty-line"></div>
          <div className="ty-contact">Arad · 2026</div>
        </div>
      )}
    </div>
  );
}
