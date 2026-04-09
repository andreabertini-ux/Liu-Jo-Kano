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

export default function Proposta({ isExporting }: { isExporting?: boolean }) {
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
              — non sull'omnichannel in senso stretto — in accordo con l'orientamento dello stakeholder
              principale. Il team Retail viene coinvolto fin dall'inizio in modalità partecipativa,
              leggera e non onerosa.
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
            <div className="steps">
              <div className="step">
                <div className="step-num">1</div>
                <div>
                  <div className="step-title">Brainstorming AS IS + lista iniziative</div>
                  <div className="step-desc">
                    Sessione di lavoro congiunta tra ARAD, il team CRM/Omnichannel e Retail, volta a mappare lo stato attuale dell'esperienza in negozio e a costruire collaborativamente la lista delle iniziative candidate. Il formato è progettato per essere strutturato ma non oneroso, favorendo il contributo autentico di tutti gli stakeholder.
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <div>
                  <div className="step-title">Creazione del survey in formato Kano</div>
                  <div className="step-desc">
                    Strutturazione del questionario secondo il modello Kano, per distinguere le iniziative imprescindibili (must-be), quelle a impatto incrementale (performance) e quelle capaci di generare sorpresa positiva nel cliente (delighter). Il questionario viene condiviso con il team CRM/Omnichannel/Retail per validazione prima della somministrazione.
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <div>
                  <div className="step-title">Somministrazione del sondaggio</div>
                  <div className="step-desc">
                    Raccolta delle risposte su un doppio campione: clienti Liu Jo esistenti e un panel esterno profilato sul target desiderato, es. giovani consumatrici con interesse per il fashion. Questo approccio consente di bilanciare la voce del cliente attuale con quella del cliente a cui il brand aspira, riducendo il rischio di bias di conferma. La modalità di somministrazione ai già clienti è da definire.
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="step-num">4</div>
                <div>
                  <div className="step-title">Aggregazione dei risultati e lista prioritizzata</div>
                  <div className="step-desc">
                    Elaborazione dei dati raccolti, costruzione del visual Kano e produzione della lista finale di iniziative prioritizzate. Le risposte dei due campioni vengono pesate per garantire che le evidenze riflettano sia i clienti fedeli attuali che le opportunità di espansione verso nuovi profili di cliente.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {(isExporting || activeSlide === 3) && (
        <div className={`slide ${isExporting || activeSlide === 3 ? 'active' : ''}`}>
          <div className="slide-inner">
            <div className="slide-header">
              <div className="slide-num">04 · Possibili follow-up</div>
              <div className="slide-title">
                Opportunità <em>a seguire</em>
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

      {(isExporting || activeSlide === 4) && (
        <div className={`slide ${isExporting || activeSlide === 4 ? 'active' : ''}`}>
          <div className="slide-inner">
            <div className="slide-header">
              <div className="slide-num">05 · Timeline</div>
              <div className="slide-title">
                Tempistiche <em>indicative</em>
              </div>
            </div>
            <div className="divider"></div>
            <div className="timeline-visual" style={{ marginBottom: '32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '140px repeat(7, 1fr)', gap: '4px', fontSize: '10px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '8px', borderBottom: '1px solid var(--color-border-tertiary)' }}>
                <div>Fase</div>
                <div style={{ textAlign: 'center' }}>W1</div>
                <div style={{ textAlign: 'center' }}>W2</div>
                <div style={{ textAlign: 'center' }}>W3</div>
                <div style={{ textAlign: 'center' }}>W4</div>
                <div style={{ textAlign: 'center' }}>W5</div>
                <div style={{ textAlign: 'center' }}>W6</div>
                <div style={{ textAlign: 'center' }}>W7</div>
              </div>

              {/* 0 - Kickoff */}
              <div style={{ display: 'grid', gridTemplateColumns: '140px repeat(7, 1fr)', gap: '4px', alignItems: 'center', padding: '12px 0', borderBottom: '0.5px solid var(--color-border-tertiary)' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-primary)' }}>0 · Kickoff</div>
                <div style={{ gridColumn: '2 / 3', background: 'var(--color-accent-gold)', height: '12px', borderRadius: '6px', width: '12px', justifySelf: 'center' }}></div>
              </div>

              {/* 1 - Brainstorming */}
              <div style={{ display: 'grid', gridTemplateColumns: '140px repeat(7, 1fr)', gap: '4px', alignItems: 'center', padding: '12px 0', borderBottom: '0.5px solid var(--color-border-tertiary)' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-primary)' }}>1 · Brainstorming ecc.</div>
                <div style={{ gridColumn: '2 / 4', background: 'rgba(201, 169, 110, 0.8)', height: '20px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'white', fontWeight: 600 }}>2 sett.</div>
              </div>

              {/* 2 - Survey */}
              <div style={{ display: 'grid', gridTemplateColumns: '140px repeat(7, 1fr)', gap: '4px', alignItems: 'center', padding: '12px 0', borderBottom: '0.5px solid var(--color-border-tertiary)' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-primary)' }}>2 · Survey ecc.</div>
                <div style={{ gridColumn: '4 / 6', background: 'rgba(201, 169, 110, 0.6)', height: '20px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'white', fontWeight: 600 }}>2 sett.</div>
              </div>

              {/* 3 - Field */}
              <div style={{ display: 'grid', gridTemplateColumns: '140px repeat(7, 1fr)', gap: '4px', alignItems: 'center', padding: '12px 0', borderBottom: '0.5px solid var(--color-border-tertiary)' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-primary)' }}>3 · Field ecc.</div>
                <div style={{ gridColumn: '6 / 7', background: 'rgba(201, 169, 110, 0.4)', height: '20px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'white', fontWeight: 600 }}>1 sett.</div>
              </div>

              {/* 4 - Analisi */}
              <div style={{ display: 'grid', gridTemplateColumns: '140px repeat(7, 1fr)', gap: '4px', alignItems: 'center', padding: '12px 0' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-primary)' }}>4 · Analisi ecc.</div>
                <div style={{ gridColumn: '7 / 9', background: 'rgba(201, 169, 110, 0.2)', height: '20px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'var(--color-text-primary)', fontWeight: 600 }}>2 sett.</div>
              </div>
            </div>

            <div className="timeline">
              <div className="tl-row">
                <div className="tl-phase">0 · Kickoff</div>
                <div>
                  <div className="tl-title">Avvio progetto</div>
                  <div className="tl-dur">Inizio W1</div>
                  <div className="tl-items">
                    Allineamento iniziale, definizione obiettivi e modalità operative
                  </div>
                </div>
              </div>
              <div className="tl-row">
                <div className="tl-phase">1 · Brainstorming</div>
                <div>
                  <div className="tl-title">Brainstorming & setup</div>
                  <div className="tl-dur">2 settimane</div>
                  <div className="tl-items">
                    Mappatura AS IS, generazione lista iniziative, allineamento con Retail
                  </div>
                </div>
              </div>
              <div className="tl-row">
                <div className="tl-phase">2 · Survey</div>
                <div>
                  <div className="tl-title">Costruzione survey Kano</div>
                  <div className="tl-dur">2 settimane</div>
                  <div className="tl-items">
                    Strutturazione domande, revisione interna, approvazione Liu Jo
                  </div>
                </div>
              </div>
              <div className="tl-row">
                <div className="tl-phase">3 · Field</div>
                <div>
                  <div className="tl-title">Field — somministrazione</div>
                  <div className="tl-dur">1 settimana</div>
                  <div className="tl-items">
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
                    Aggregazione dati, visual Kano, lista prioritizzata, presentazione finale
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-note">
              <strong>Totale stimato:</strong> 7-8 settimane dal kickoff. Da raffinare con il team
              dopo il kick-off. I follow-up (se attivati) si aggiungono in coda sequenzialmente.
              La timeline non considera tempi di feedback prolungati.
            </div>
          </div>
        </div>
      )}

      {(isExporting || activeSlide === 5) && (
        <div className={`slide ${isExporting || activeSlide === 5 ? 'active' : ''}`}>
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

      {(isExporting || activeSlide === 6) && (
        <div className={`slide ${isExporting || activeSlide === 6 ? 'active' : ''}`}>
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
                  <strong>Approvazione Scope of Work</strong> — Condivisione della proposta per
                  approvazione di approccio, scope e timeline. Definizione della modalità di
                  coinvolgimento Retail.
                </div>
              </div>
              <div className="ns-row">
                <div className="ns-num">2</div>
                <div className="ns-text">
                  <strong>Kick-off del progetto</strong> — Avvio delle attività a seguito di
                  accettazione: pianificazione del brainstorming, setup degli strumenti e
                  definizione del panel di clienti target.
                </div>
              </div>
              <div className="ns-row">
                <div className="ns-num">3</div>
                <div className="ns-text">
                  <strong>Sessione di brainstorming</strong> — Incontro congiunto con il team CRM/Omnichannel e Retail per mappare lo stato attuale e costruire la lista delle iniziative candidate.
                </div>
              </div>
              <div className="ns-row">
                <div className="ns-num">4</div>
                <div className="ns-text">
                  <strong>Co-creazione e validazione del questionario</strong> — Dopo il brainstorming, prevediamo uno step congiunto per strutturare (ARAD), testare e approvare (Liu Jo) definitivamente le domande esatte prima di somministrarle ai clienti.
                </div>
              </div>
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
