    // Complete SPM Data Matrix with Atomic Topics & Obsidian Checklists
    const matrixData = [
      {
        id: "p1",
        title: "1. Visão Estratégica & Negócios",
        subgroups: [
          {
            id: "s1_1",
            code: "1.1",
            title: "Alinhamento com Objetivos Executivos (C-Level)",
            topics: [
              {
                id: "1_1_1",
                code: "1.1.1",
                name: "Conexão de OKRs Corporativos",
                desc: "Capacidade de desdobrar as metas financeiras e estratégicas globais da diretoria em OKRs e KPIs operacionais claros para os times de produto e engenharia.",
                checklist: [
                  "Entender a diferença entre Leading Indicators e Lagging Indicators.",
                  "Mapear uma meta de C-Level (ex: Aumentar margem em 15%) em metas operacionais de produto.",
                  "Aprender a definir Key Results focados em Outcomes em vez de Outputs.",
                  "Implementar e acompanhar rituais trimestrais de revisão de OKRs junto às squads."
                ]
              },
              {
                id: "1_1_2",
                code: "1.1.2",
                name: "Pitch & Storytelling Executivo",
                desc: "Habilidade de estruturar narrativas persuasivas, diretas e fundamentadas em dados para propor estratégias, defender orçamentos e reportar resultados para a diretoria.",
                checklist: [
                  "Dominar o Princípio da Pirâmide de Minto (começar pela resposta/conclusão).",
                  "Traduzir complexidades técnicas e arquiteturais em linguagem de impacto financeiro e risco de negócio.",
                  "Construir decks executivos sintéticos (5-10 slides) focados em problema, oportunidade, ROI e proposta.",
                  "Defender Business Cases e orçamentos de infraestrutura/equipes com a liderança."
                ]
              },
              {
                id: "1_1_3",
                code: "1.1.3",
                name: "Tese de Produto & Moats (Diferenciais Defensáveis)",
                desc: "Definição do porquê o produto vence no mercado e como ele constrói vantagens competitivas sustentáveis e difíceis de serem copiadas.",
                checklist: [
                  "Estudar os 4 principais Moats: Efeito de Rede, Custo de Troca, Escala e Ativos Intangíveis (Marcas/Patentes/Compliance).",
                  "Aplicar frameworks de posicionamento (ex: April Dunford's Obviously Awesome).",
                  "Realizar análise sistemática de concorrentes e mapear 'espaços em branco' no mercado.",
                  "Escrever uma Tese de Produto sintética de longo prazo defender viabilidade de negócio."
                ]
              },
              {
                id: "1_1_4",
                code: "1.1.4",
                name: "Mapeamento de Tendências & Inovação",
                desc: "Rotina sistemática de monitoramento de mudanças regulatórias, macroeconômicas, tecnológicas (ex: IA, APIs, Fiscal/ERP) e de hábitos de consumo.",
                checklist: [
                  "Aplicar Análise PESTEL/Porter para o setor do produto.",
                  "Estruturar rotina de monitoramento de normas regulatórias (ex: Bacen, Legislação Fiscal/Sped).",
                  "Gerenciar portfólio dividindo energia entre Horizontes 1, 2 e 3 de inovação.",
                  "Mapear oportunidades de integração com APIs e ecossistemas parceiros."
                ]
              }
            ]
          },
          {
            id: "s1_2",
            code: "1.2",
            title: "Gestão de Impacto Financeiro (Business & Unit Economics)",
            topics: [
              {
                id: "1_2_1",
                code: "1.2.1",
                name: "Métricas Financeiras de SaaS/Produto (CAC, LTV, Churn, ARR)",
                desc: "Compreensão profunda e acompanhamento dos indicadores fundamentais da saúde financeira do negócio.",
                checklist: [
                  "Calcular e otimizar CAC (Custo de Aquisição de Cliente) por canal.",
                  "Mapear LTV (Lifetime Value) e relação LTV/CAC (alvo > 3x).",
                  "Acompanhar ARR/MRR, Net Revenue Retention (NRR) e Churn Voluntário/Involuntário.",
                  "Analisar Payback Period e margens de contribuição do produto."
                ]
              },
              {
                id: "1_2_2",
                code: "1.2.2",
                name: "Modelagem de Precificação & Monetização (Pricing & Packaging)",
                desc: "Estruturação de modelos de cobrança, empacotamento de funcionalidades e testes de precificação.",
                checklist: [
                  "Modelar precificação por uso (usage-based), por assento (per-seat) ou tiers fixos.",
                  "Conduzir testes de elasticidade de preço e pesquisas Willingness-to-Pay (WTP).",
                  "Estruturar estratégias de Upsell, Cross-sell e pacotes de funcionalidades avançadas.",
                  "Analisar impacto das mudanças de preço na conversão e na retenção."
                ]
              },
              {
                id: "1_2_3",
                code: "1.2.3",
                name: "Análise de ROI & P&L (Profit & Loss) de Produto",
                desc: "Compreensão dos custos operacionais, servidores, licenças e equipe atrelados ao produto para garantir rentabilidade.",
                checklist: [
                  "Mapear a DRE/P&L do produto identificando custos diretos e indiretos.",
                  "Calcular ROI previsto antes de aprovar grandes desenvolvimentos.",
                  "Acompanhar custos de infraestrutura de nuvem (AWS/GCP) por transação/usuário.",
                  "Balancear investimento em novas aquisições versus retenção de base."
                ]
              }
            ]
          },
          {
            id: "s1_3",
            code: "1.3",
            title: "Visão de Longo Prazo & Estratégia de Portfólio",
            topics: [
              {
                id: "1_3_1",
                code: "1.3.1",
                name: "Roadmap Estratégico Baseado em Outcomes (1-3 Anos)",
                desc: "Construção de planos de produto focados em resolver problemas e mover indicadores de negócio em vez de listas de entregas.",
                checklist: [
                  "Estruturar roadmaps orientados a temas estratégicos e resultados (Outcomes).",
                  "Comunicar horizontes de entrega (Agora, Próximo, Depoimento) reduzindo expectativa de datas fixas.",
                  "Alimentar a visão de longo prazo com dados contínuos de clientes e mercado.",
                  "Revisar o roadmap semestralmente ajustando a novos cenários."
                ]
              },
              {
                id: "1_3_2",
                code: "1.3.2",
                name: "Gestão do Ciclo de Vida do Produto (PLC)",
                desc: "Gestão desde a concepção (0 a 1), tração, maturidade até a descontinuação (sunset) de módulos legados.",
                checklist: [
                  "Identificar em qual fase do ciclo de vida o produto/módulo se encontra.",
                  "Definir estratégias de transição para produtos em fase de maturidade ou declínio.",
                  "Executar processos de descontinuação (sunset) de recursos antigos minimizando atrito.",
                  "Garantir migração fluida de usuários para novas arquiteturas/módulos."
                ]
              }
            ]
          }
        ]
      },
      {
        id: "p2",
        title: "2. Ambiguidade & Tomada de Decisões",
        subgroups: [
          {
            id: "s2_1",
            code: "2.1",
            title: "Identificação e Mapeamento de Problemas Complexos",
            topics: [
              {
                id: "2_1_1",
                code: "2.1.1",
                name: "Estruturação do Caos & Separação de Sintomas de Causa Raiz",
                desc: "Organização de solicitações desconexas de clientes e equipes internas em problemas estruturados.",
                checklist: [
                  "Aplicar técnica dos 5 Porquês e Diagrama de Ishikawa para encontrar causa raiz.",
                  "Filtrar ruídos de pedidos de 'features' para descobrir a dor real do usuário.",
                  "Estruturar árvores de oportunidade (Opportunity Solution Trees).",
                  "Sintetizar cenários caóticos em briefs de oportunidade claros."
                ]
              },
              {
                id: "2_1_2",
                code: "2.1.2",
                name: "Atuação em Mercados Regulados / Regras de Negócio Complexas",
                desc: "Navegação fluida em cenários de alta complexidade regulatória, fiscal, de pagamentos ou integrações.",
                checklist: [
                  "Mapear requisitos de compliance, LGPD e regras fiscais (NFe, CTe, SPED).",
                  "Modelar fluxos financeiros e de pagamentos considerando liquidação e tarifas.",
                  "Antecipar entraves regulatórios sem estagnar o ritmo da engenharia.",
                  "Trabalhar em parceria com especialistas jurídicos e tributários."
                ]
              }
            ]
          },
          {
            id: "s2_2",
            code: "2.2",
            title: "Autonomia Decisória & Gestão de Risco",
            topics: [
              {
                id: "2_2_1",
                code: "2.2.1",
                name: "Tomada de Decisão sob Incerteza (One-Way vs. Two-Way Door)",
                desc: "Capacidade de avançar com dados parciais diferenciando decisões reversíveis das irreversíveis.",
                checklist: [
                  "Identificar se uma decisão é reversível (Two-Way) ou irreversível (One-Way).",
                  "Aumentar velocidade em decisões reversíveis sem esperar dados perfeitos.",
                  "Exigir alta validação e mitigating plans em decisões irreversíveis.",
                  "Evitar paralisia por análise em ambientes incertos."
                ]
              },
              {
                id: "2_2_2",
                code: "2.2.2",
                name: "Mapeamento e Mitigação dos 4 Riscos de Produto (Cagan)",
                desc: "Avaliação preventiva dos riscos de Valor, Usabilidade, Exequibilidade e Viabilidade de Negócio.",
                checklist: [
                  "Avaliar Risco de Valor: O cliente vai comprar/usar isso?",
                  "Avaliar Risco de Usabilidade: O usuário consegue entender e usar?",
                  "Avaliar Risco de Exequibilidade: A engenharia consegue construir?",
                  "Avaliar Risco de Viabilidade: Funciona para o nosso modelo de negócio?"
                ]
              }
            ]
          }
        ]
      },
      {
        id: "p3",
        title: "3. Parceria Técnica & Arquitetura (Engenharia & Design)",
        subgroups: [
          {
            id: "s3_1",
            code: "3.1",
            title: "Colaboração em Arquitetura & Engenharia de Software",
            topics: [
              {
                id: "3_1_1",
                code: "3.1.1",
                name: "Domínio de Arquitetura de Sistemas & APIs (REST, Webhooks, Microsserviços)",
                desc: "Diálogo em nível técnico com Tech Leads sobre decisões de sistemas, integrações e dados.",
                checklist: [
                  "Compreender arquitetura de microsserviços versus monolitos e mensageria/filas (RabbitMQ/Kafka).",
                  "Analisar contratos de API REST, status codes, Webhooks e modelos de autenticação.",
                  "Discussão de trade-offs de desempenho, latência e disponibilidade de sistemas.",
                  "Avaliar arquitetura de bancos de dados relacionais (Postgres/SQL) e não-relacionais."
                ]
              },
              {
                id: "3_1_2",
                code: "3.1.2",
                name: "Gestão e Negociação de Débito Técnico",
                desc: "Garantia de espaço no roadmap para refatorações, sustentabilidade de infraestrutura e performance.",
                checklist: [
                  "Reservar capacidade recorrente da squad (ex: 15-20%) para débitos técnicos.",
                  "Traduzir débitos técnicos em riscos de indisponibilidade ou lentidão para o negócio.",
                  "Priorizar refatorações com base em partes críticas da jornada.",
                  "Evitar acumular débitos de segurança e compliance."
                ]
              }
            ]
          },
          {
            id: "s3_2",
            code: "3.2",
            title: "Parceria com Product Design & UX/UI",
            topics: [
              {
                id: "3_2_1",
                code: "3.2.1",
                name: "Co-criação em Discovery & Design Systems",
                desc: "Trabalho integrado com Product Designers no mapeamento de jornadas e padronização visual.",
                checklist: [
                  "Participar ativamente da ideação de fluxos e arquitetura de informação.",
                  "Incentivar o reuso e evolução de componentes do Design System.",
                  "Acompanhar testes de usabilidade e protótipos de alta fidelidade.",
                  "Medir métricas de experiência do usuário (SUS, CES, Task Completion Rate)."
                ]
              }
            ]
          }
        ]
      },
      {
        id: "p4",
        title: "4. Cultura de Dados, Pesquisa & IA Generativa",
        subgroups: [
          {
            id: "s4_1",
            code: "4.1",
            title: "Product Analytics & Consultas de Dados",
            topics: [
              {
                id: "4_1_1",
                code: "4.1.1",
                name: "Consultas SQL & Ferramentas de Analytics (Amplitude/Mixpanel)",
                desc: "Autonomia para extrair insights diretamente do banco de dados e plataformas de comportamento.",
                checklist: [
                  "Escrever queries SQL autônomas (SELECT, JOINs, GROUP BY, Window Functions) para análises.",
                  "Configurar e interpretar funis e análises de coorte (Cohorts) no Mixpanel/Amplitude.",
                  "Definir a North Star Metric (NSM) e métricas de proteção (Guardrail Metrics).",
                  "Monitorar retenção e engajamento por safra de usuários."
                ]
              },
              {
                id: "4_1_2",
                code: "4.1.2",
                name: "Produtividade com IA Generativa no Dia a Dia de Produto",
                desc: "Uso prático de ferramentas de IA para acelerar pesquisas, análises, sintaxe SQL e documentação de PRDs.",
                checklist: [
                  "Utilizar LLMs para sintetizar grandes volumes de feedbacks e pesquisas de usuários.",
                  "Acelerar criação de PRDs, histórias de usuário e casos de teste com IA.",
                  "Usar IA para apoiar na escrita de queries SQL complexas e scripts de análise.",
                  "Explorar automações de tarefas repetitivas de produto com ferramentas de IA."
                ]
              }
            ]
          }
        ]
      },
      {
        id: "p5",
        title: "5. Stakeholders, Influência & Liderança",
        subgroups: [
          {
            id: "s5_1",
            code: "5.1",
            title: "Influência Sem Autoridade Direta & Negociação",
            topics: [
              {
                id: "5_1_1",
                code: "5.1.1",
                name: "Gestão do 'Não' Fundamentado & Matriz de Stakeholders",
                desc: "Capacidade de recusar demandas de forma diplomática com base em dados e alinhar áreas conflitantes.",
                checklist: [
                  "Mapear poder de decisão e interesse de stakeholders (Vendas, Suporte, Jurídico).",
                  "Dizer 'não' ou 'agora não' com embasamento em dados e alinhamento à estratégia.",
                  "Mediar conflitos entre apetite comercial e viabilidade técnica.",
                  "Manter transparência total em relatórios de status e post-mortems de falhas."
                ]
              },
              {
                id: "5_1_2",
                code: "5.1.2",
                name: "Mentoria de PMs & Elevação da Maturidade da Guilda",
                desc: "Desenvolvimento de pessoas e evolução dos processos internos da comunidade de produto.",
                checklist: [
                  "Mentorar PMs Juniores, Plenos e POs em técnicas de Discovery e execução.",
                  "Padronizar templates de PRDs, Product Reviews e especificações.",
                  "Disseminar cultura de experimentação contínua na organização.",
                  "Apoiar na contratação e avaliação técnica de novos PMs."
                ]
              }
            ]
          }
        ]
      }
    ];

    // State Management
    let scores = {};
    let notes = {};
    let expandedSubgroups = {};
    const isLocalEnvironment = location.protocol === 'file:' ||
      ['localhost', '127.0.0.1', '::1'].includes(location.hostname);

    // Initialize State
    async function initData() {
      const localActions = document.getElementById('local-data-actions');
      localActions.style.display = isLocalEnvironment ? 'flex' : 'none';

      matrixData.forEach(pilar => {
        pilar.subgroups.forEach(sub => {
          sub.topics.forEach(topic => {
            scores[topic.id] = 0;
          });
        });
      });

      if (isLocalEnvironment) {
        try {
          const savedScores = JSON.parse(localStorage.getItem('spm_scores_v2') || '{}');
          const savedNotes = JSON.parse(localStorage.getItem('spm_notes_v2') || '{}');
          scores = { ...scores, ...savedScores };
          notes = savedNotes;
        } catch (error) {
          console.warn('Não foi possível ler os dados locais salvos.', error);
        }
      } else {
        try {
          const response = await fetch('../competencias.json');
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const publishedData = await response.json();
          const publishedScores = publishedData.scores || publishedData;
          scores = { ...scores, ...publishedScores };
        } catch (error) {
          console.error('Não foi possível carregar ../competencias.json.', error);
        }
      }

      // Default expand first subgroups
      matrixData.forEach(p => {
        p.subgroups.forEach((sub, idx) => {
          expandedSubgroups[sub.id] = true;
        });
      });

      renderMatrix();
      updateDashboard();
    }

    // Save State
    function saveData() {
      if (isLocalEnvironment) {
        localStorage.setItem('spm_scores_v2', JSON.stringify(scores));
        localStorage.setItem('spm_notes_v2', JSON.stringify(notes));
      }
      updateDashboard();
    }

    // Score Set
    function setScore(topicId, val) {
      scores[topicId] = val;
      saveData();
      renderMatrix();
    }

    // Expand / Collapse Controls
    function toggleSubgroup(subId) {
      expandedSubgroups[subId] = !expandedSubgroups[subId];
      renderMatrix();
    }

    function expandAll() {
      matrixData.forEach(p => p.subgroups.forEach(s => expandedSubgroups[s.id] = true));
      renderMatrix();
    }

    function collapseAll() {
      matrixData.forEach(p => p.subgroups.forEach(s => expandedSubgroups[s.id] = false));
      renderMatrix();
    }

    // Render Function
    function renderMatrix() {
      const container = document.getElementById('matrixContainer');
      const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
      container.innerHTML = '';

      matrixData.forEach(pilar => {
        let pilarHasMatch = false;

        const pilarEl = document.createElement('div');
        pilarEl.className = 'bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-sm';

        let pilarScoreSum = 0;
        let pilarTopicCount = 0;

        let subgroupsHtml = '';

        pilar.subgroups.forEach(sub => {
          let subMatches = false;
          let subScoreSum = 0;
          let subTopicCount = sub.topics.length;

          let topicsHtml = '';

          sub.topics.forEach(topic => {
            const currentScore = scores[topic.id] || 0;
            pilarScoreSum += currentScore;
            pilarTopicCount++;
            subScoreSum += currentScore;

            const matchesSearch = !searchTerm || 
              topic.name.toLowerCase().includes(searchTerm) || 
              topic.desc.toLowerCase().includes(searchTerm) || 
              topic.code.toLowerCase().includes(searchTerm) ||
              topic.checklist.some(c => c.toLowerCase().includes(searchTerm));

            if (matchesSearch) {
              subMatches = true;
              pilarHasMatch = true;

              const noteText = notes[topic.id] || '';

              topicsHtml += `
                <div class="p-4 bg-slate-950/70 border-t border-slate-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-950 transition">
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="font-mono text-[11px] text-indigo-400 font-bold bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">${topic.code}</span>
                      <h5 class="text-xs font-bold text-slate-100">${topic.name}</h5>
                      <button onclick="openGuideModal('${topic.id}')" class="text-[10px] text-indigo-400 hover:text-indigo-300 font-medium bg-indigo-500/10 hover:bg-indigo-500/20 px-2 py-0.5 rounded transition flex items-center gap-1">
                        <i class="fa-solid fa-book-open"></i> Checklist & Obsidian
                      </button>
                    </div>
                    <p class="text-[11px] text-slate-400 leading-relaxed">${topic.desc}</p>
                    ${noteText ? `
                      <div class="text-[10px] text-slate-400 bg-slate-900 p-2 rounded border border-slate-800/80 flex items-start gap-1.5 mt-2">
                        <i class="fa-solid fa-sticky-note text-amber-400 mt-0.5"></i>
                        <span class="line-clamp-2">${noteText}</span>
                      </div>
                    ` : ''}
                  </div>

                  <!-- 0-5 Proficiency Selector -->
                  <div class="flex items-center gap-1 bg-slate-900 p-1.5 rounded-xl border border-slate-800 shrink-0">
                    ${[0, 1, 2, 3, 4, 5].map(v => {
                      const isActive = currentScore === v;
                      let activeStyle = '';
                      if (isActive) {
                        if (v === 0) activeStyle = 'bg-slate-700 text-slate-200 font-bold shadow';
                        if (v === 1) activeStyle = 'bg-rose-900/80 text-rose-200 border border-rose-700 font-bold shadow';
                        if (v === 2) activeStyle = 'bg-amber-900/80 text-amber-200 border border-amber-700 font-bold shadow';
                        if (v === 3) activeStyle = 'bg-sky-900/80 text-sky-200 border border-sky-700 font-bold shadow';
                        if (v === 4) activeStyle = 'bg-indigo-900/80 text-indigo-200 border border-indigo-700 font-bold shadow';
                        if (v === 5) activeStyle = 'bg-emerald-900/80 text-emerald-200 border border-emerald-700 font-bold shadow';
                      } else {
                        activeStyle = 'text-slate-500 hover:text-slate-300 hover:bg-slate-800';
                      }
                      return `
                        <button onclick="setScore('${topic.id}', ${v})" class="w-7 h-7 text-xs rounded-lg font-mono transition flex items-center justify-center ${activeStyle}">
                          ${v}
                        </button>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            }
          });

          if (subMatches || !searchTerm) {
            const isExpanded = expandedSubgroups[sub.id] || searchTerm;
            const subAvg = subTopicCount > 0 ? (subScoreSum / subTopicCount).toFixed(1) : "0.0";

            subgroupsHtml += `
              <div class="border-t border-slate-800/80">
                <div onclick="toggleSubgroup('${sub.id}')" class="px-5 py-3.5 bg-slate-900/40 hover:bg-slate-900/80 cursor-pointer flex items-center justify-between transition">
                  <div class="flex items-center gap-3">
                    <i class="fa-solid ${isExpanded ? 'fa-chevron-down' : 'fa-chevron-right'} text-xs text-slate-500"></i>
                    <span class="font-mono text-xs text-slate-400 font-bold">${sub.code}</span>
                    <h4 class="text-xs font-bold text-slate-200">${sub.title}</h4>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="text-[11px] font-mono text-slate-400">Média: <strong class="text-indigo-400">${subAvg}</strong> / 5.0</span>
                    <span class="text-[10px] text-slate-500 font-medium bg-slate-800 px-2 py-0.5 rounded-full">${sub.topics.length} tópicos</span>
                  </div>
                </div>
                ${isExpanded ? `<div>${topicsHtml}</div>` : ''}
              </div>
            `;
          }
        });

        if (pilarHasMatch || !searchTerm) {
          const pilarAvg = pilarTopicCount > 0 ? (pilarScoreSum / pilarTopicCount).toFixed(1) : "0.0";
          const pilarPct = pilarTopicCount > 0 ? Math.round((pilarScoreSum / (pilarTopicCount * 5)) * 100) : 0;

          pilarEl.innerHTML = `
            <div class="p-5 bg-slate-900/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <div class="w-3 h-8 bg-gradient-to-b from-indigo-500 to-violet-600 rounded-full"></div>
                <div>
                  <h3 class="text-sm font-bold text-slate-100">${pilar.title}</h3>
                  <p class="text-[11px] text-slate-400">Média do Pilar: <strong class="text-indigo-300 font-mono">${pilarAvg} / 5.0</strong> (${pilarPct}% de domínio)</p>
                </div>
              </div>
              <div class="w-full md:w-48 bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                <div class="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full rounded-full transition-all duration-300" style="width: ${pilarPct}%"></div>
              </div>
            </div>
            ${subgroupsHtml}
          `;

          container.appendChild(pilarEl);
        }
      });
    }

    // Update Overall Stats & Chart
    let radarChart = null;

    function updateDashboard() {
      let totalSum = 0;
      let totalTopics = 0;

      const pilarAverages = [];
      const pilarLabels = [];

      matrixData.forEach(pilar => {
        let pSum = 0;
        let pCount = 0;

        pilar.subgroups.forEach(sub => {
          sub.topics.forEach(t => {
            const score = scores[t.id] || 0;
            totalSum += score;
            totalTopics++;
            pSum += score;
            pCount++;
          });
        });

        const avg = pCount > 0 ? pSum / pCount : 0;
        pilarAverages.push(avg.toFixed(1));
        pilarLabels.push(pilar.title.split('.')[1] ? pilar.title.split('.')[1].trim() : pilar.title);
      });

      const overallAvg = totalTopics > 0 ? (totalSum / totalTopics).toFixed(1) : "0.0";
      const overallPct = Math.round((totalSum / (totalTopics * 5)) * 100);

      document.getElementById('overallScore').innerText = overallAvg;
      document.getElementById('overallProgressBar').style.width = `${overallPct}%`;

      // Maturity Level Label
      const labelEl = document.getElementById('maturityLabel');
      if (overallAvg < 1.5) {
        labelEl.innerText = 'Nível: PM Pleno em Transição';
        labelEl.className = 'mt-3 text-xs font-medium text-amber-300 bg-amber-950/60 border border-amber-800/60 px-2.5 py-1 rounded-md inline-block';
      } else if (overallAvg < 3.5) {
        labelEl.innerText = 'Nível: Senior PM Autônomo';
        labelEl.className = 'mt-3 text-xs font-medium text-sky-300 bg-sky-950/60 border border-sky-800/60 px-2.5 py-1 rounded-md inline-block';
      } else if (overallAvg < 4.5) {
        labelEl.innerText = 'Nível: Senior PM Forte / Staff PM';
        labelEl.className = 'mt-3 text-xs font-medium text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 px-2.5 py-1 rounded-md inline-block';
      } else {
        labelEl.innerText = 'Nível: Lead / Principal / Head de Produto';
        labelEl.className = 'mt-3 text-xs font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-md inline-block';
      }

      // Radar Chart Update
      const ctx = document.getElementById('radarChart').getContext('2d');
      if (radarChart) {
        radarChart.data.datasets[0].data = pilarAverages;
        radarChart.update();
      } else {
        radarChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: ['Estratégia & Negócios', 'Ambiguidade', 'Parceria Técnica', 'Dados & IA', 'Stakeholders'],
            datasets: [{
              label: 'Média (0-5)',
              data: pilarAverages,
              backgroundColor: 'rgba(99, 102, 241, 0.2)',
              borderColor: 'rgba(99, 102, 241, 1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(168, 85, 247, 1)'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                min: 0,
                max: 5,
                ticks: { stepSize: 1, display: false },
                grid: { color: 'rgba(51, 65, 85, 0.5)' },
                angleLines: { color: 'rgba(51, 65, 85, 0.5)' },
                pointLabels: { color: '#94a3b8', font: { size: 9, family: 'Inter' } }
              }
            },
            plugins: {
              legend: { display: false }
            }
          }
        });
      }
    }

    // Modal Guide & Obsidian Inspection
    let activeModalTopicId = null;

    function openGuideModal(topicId) {
      activeModalTopicId = topicId;
      let foundTopic = null;

      matrixData.forEach(p => {
        p.subgroups.forEach(s => {
          s.topics.forEach(t => {
            if (t.id === topicId) foundTopic = t;
          });
        });
      });

      if (!foundTopic) return;

      document.getElementById('modalTitle').innerText = foundTopic.name;
      document.getElementById('modalCode').innerText = foundTopic.code;
      document.getElementById('modalObsidianTag').innerText = `[[${foundTopic.code} - ${foundTopic.name}]]`;
      document.getElementById('modalDescription').innerText = foundTopic.desc;
      document.getElementById('modalNotesInput').value = notes[topicId] || '';

      const checklistContainer = document.getElementById('modalChecklist');
      checklistContainer.innerHTML = '';

      foundTopic.checklist.forEach((item, idx) => {
        checklistContainer.innerHTML += `
          <div class="flex items-start gap-2.5 p-2.5 bg-slate-950/60 rounded-lg border border-slate-800">
            <span class="w-5 h-5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800/50 flex items-center justify-center font-bold font-mono text-[10px] shrink-0 mt-0.5">${idx + 1}</span>
            <span class="text-slate-300 leading-normal">${item}</span>
          </div>
        `;
      });

      document.getElementById('guideModal').classList.remove('hidden');
    }

    function closeModal() {
      document.getElementById('guideModal').classList.add('hidden');
      activeModalTopicId = null;
    }

    function saveModalNotes() {
      if (!activeModalTopicId) return;
      const text = document.getElementById('modalNotesInput').value;
      notes[activeModalTopicId] = text;
      saveData();
      renderMatrix();
    }

    function copyObsidianTag() {
      const tag = document.getElementById('modalObsidianTag').innerText;
      navigator.clipboard.writeText(tag);
      alert(`Link do Obsidian copiado: ${tag}`);
    }

    // Export / Import
    function exportData() {
      if (!isLocalEnvironment) return;
      const payload = {
        scores,
        exportedAt: new Date().toISOString(),
        version: "2.0-atomic-0-5"
      };

      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'competencias.json';
      a.click();
    }

    function importData(e) {
      if (!isLocalEnvironment) return;
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(evt) {
        try {
          const parsed = JSON.parse(evt.target.result);
          if (parsed.scores) scores = parsed.scores;
          if (parsed.notes) notes = parsed.notes;
          saveData();
          renderMatrix();
          alert('Dados importados com sucesso!');
        } catch (err) {
          alert('Erro ao importar arquivo JSON.');
        }
      };
      reader.readAsText(file);
    }

    function resetData() {
      if (!isLocalEnvironment) return;
      if (confirm('Tem certeza de que deseja resetar todas as notas para 0?')) {
        scores = {};
        notes = {};
        matrixData.forEach(p => p.subgroups.forEach(s => s.topics.forEach(t => scores[t.id] = 0)));
        saveData();
        renderMatrix();
      }
    }

    // Init on Load
    window.addEventListener('DOMContentLoaded', initData);