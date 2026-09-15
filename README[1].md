# Mal Enterprise BI Foundation

A working, deployment-ready prototype for a digital bank's first enterprise BI layer. Every number is synthetic. No customer or bank data is used.

## Live demo

After deployment, replace this line with the public URL. The site has no authentication or backend dependency.

## Why this stack

The prototype uses semantic HTML, CSS, SVG, and vanilla JavaScript. A static stack was chosen because it:

- can be reviewed without a login and deployed in minutes;
- has no licence or infrastructure dependency;
- makes metric logic and synthetic data fully inspectable in the repository;
- is an appropriate prototype before the target warehouse and governed BI platform are selected.

In production, I would preserve the same information architecture while moving metric logic into a governed semantic layer (for example dbt MetricFlow, LookML, or a Power BI semantic model) with row-level security and lineage.

## What is included

1. **Executive overview** — eight certified KPIs spanning Product, Finance, Payments, Savings, and Credit.
2. **Credit & Lending** — approval funnel, delinquency mix, 30+ DPD trend, and a new-to-bank early-warning indicator.
3. **Metric conflict resolution** — three competing Active Customer definitions alongside one certified definition and decision record.
4. **KPI dictionary** — 18 searchable metrics with owner, definition, formula, source, cadence, and governance status.
5. **Self-service hub** — available marts, grains, owners, access steps, support channels, and service levels.

## Data model

The prototype represents a dimensional model with conformed customer and date keys:

| Model | Grain | Key measures / attributes |
|---|---|---|
| `mart_customer_daily` | customer × day | status, product holdings, qualifying activity flag |
| `mart_credit_funnel` | application | submission, eligibility, decision, acceptance, booking timestamps |
| `mart_lending_daily` | facility × day | principal outstanding, DPD, origination cohort |
| `mart_payments` | payment attempt | status, settled amount, channel, event classification |
| `mart_deposits_daily` | account × day | ledger balance, customer concentration band |
| `mart_finance_daily` | GL account × day | income, expense, direct cost, management mapping |

The dashboard data is held in `data.js`. In a production implementation, that object would be replaced by certified semantic-model queries. KPI cards and dictionary entries deliberately use the same names, formulas, cadences, and sources.

## Metric conflict resolution

The conflict screen does not claim that Finance, Product, or Credit used “bad” definitions. Each definition answered a different question at a different grain. The reconciliation process was:

1. expose the three definitions and quantify their variance;
2. agree decision criteria: comparable, auditable, actionable, and owned;
3. certify a trailing-30-day transacting definition using settled customer-initiated monetary events;
4. retain the other definitions as clearly labelled domain metrics;
5. record owner, approvers, effective date, and quarterly review cycle.

The certified value of **128,420** is consistent everywhere in the prototype. The SQL-like formula shown in the resolution view is the implementation contract; exclusions prevent passive balances, logins, system postings, failed events, and reversals from inflating engagement.

## Metric governance operating model

- **Metric owner:** accountable for business meaning and decision use.
- **Data steward:** validates implementation, quality tests, and lineage.
- **Metric Council:** resolves cross-domain definitions; CFO and CRO approve enterprise financial/risk metrics.
- **Certified:** production-tested and permitted in executive reporting.
- **Exploratory:** useful for analysis but visibly labelled and prohibited from executive reporting until certified.

## Run locally

No build step is required. Open `index.html`, or run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy publicly

### GitHub Pages

1. Create a public repository and add these files at its root.
2. In **Settings → Pages**, select **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Add the generated Pages URL to the **Live demo** section above.

### Netlify alternative

Drag the project folder into Netlify Drop. Because the site is static, no build command or environment variables are required.

## Suggested 5-minute walkthrough

- **0:00–1:00:** Frame the problem: three domains, conflicting definitions, and no shared semantic contract.
- **1:00–2:00:** Executive view: highlight growth and the 30+ DPD threshold signal.
- **2:00–3:00:** Credit view: connect funnel conversion with portfolio quality and early warning.
- **3:00–4:15:** Conflict view: explain why reconciliation is governance, not just SQL.
- **4:15–5:00:** Dictionary and self-service hub: show how the model scales beyond a sole BI hire.

## Repository structure

```text
.
├── index.html      # Page structure and five BI views
├── styles.css      # Responsive visual design
├── data.js         # Synthetic data and metric catalogue
├── app.js          # Rendering, filtering, navigation, and export
└── README.md       # Architecture, governance, and deployment notes
```
