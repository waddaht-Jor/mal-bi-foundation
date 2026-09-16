# Mal Enterprise BI Foundation

## Live dashboard

[Open the dashboard](https://waddaht-jor.github.io/mal-bi-foundation/)

This is my prototype for establishing a shared BI foundation for Mal's credit, payments and savings products. The data is completely synthetic. No real customer or bank data is included.

## What I built

The prototype contains five views:

1. **Executive Overview** - eight enterprise KPIs across Product, Finance, Payments, Savings and Credit.
2. **Credit & Lending** - application funnel, approval rate, loan book, delinquency mix and an early-warning indicator.
3. **Metric Conflict Resolution** - Finance, Product and Credit definitions of Active Customers shown together with one certified enterprise definition.
4. **KPI Dictionary** - 18 metrics with their owner, definition, formula, source, refresh schedule and certification status.
5. **Self-Service Hub** - available datasets, access steps, service levels and publishing guardrails.

## Why I chose this stack

I used a lightweight web dashboard built with HTML, CSS and JavaScript and deployed it through GitHub Pages.

My main reason was the assessment requirement for a public URL that reviewers can open without a login. This approach has no licence, account or server dependency and allowed me to focus on the BI design: common definitions, governance, credit monitoring and self-service controls.

I used AI-assisted development to translate my dashboard design into the web implementation. I validated the figures, definitions, navigation and deployment myself. In a production bank environment, I would use a governed BI platform such as Power BI, with the calculations held in a controlled semantic model rather than in the presentation layer.

## Data model

I designed the prototype around a small set of domain marts with shared customer and date keys.

| Dataset | Grain | Main purpose |
|---|---|---|
| `mart_customer_daily` | Customer per day | Customer status, product holdings and qualifying activity |
| `mart_credit_funnel` | Credit application | Application, eligibility, approval, acceptance and booking stages |
| `mart_lending_daily` | Credit facility per day | Principal balance, delinquency and origination cohort |
| `mart_payments` | Payment attempt | Transaction status, settled amount and payment channel |
| `mart_deposits_daily` | Savings account per day | Closing balance and customer concentration |
| `mart_finance_daily` | GL account per day | Revenue, operating cost and management reporting mappings |

The values used by the prototype are stored in `data.js`. The same metric names and definitions are used in the dashboards and KPI dictionary so that they do not contradict each other.

## How I resolved the Active Customers conflict

I did not treat the three original definitions as incorrect. They answered different business questions:

- **Finance:** customers with a funded relationship at month end.
- **Product:** customers with any engagement event during the last 28 days.
- **Credit:** customers with an open credit facility or repayment activity.

These definitions can remain as clearly named domain metrics, but they should not all be presented as the enterprise Active Customers KPI.

For the certified enterprise definition, I selected:

> A distinct, non-test customer with at least one settled customer-initiated monetary transaction during the trailing 30 calendar days.

Failed events, reversals, fees, interest postings and internal transfers are excluded. The resulting synthetic value for September 2026 is **128,420**, and this value is used consistently throughout the prototype.

I selected this definition because it is:

- comparable across products;
- based on auditable settled events;
- representative of genuine customer activity;
- clear enough to implement and test consistently.

The proposed owner is Product, with Finance and Credit Risk approval for enterprise reporting. The decision should be recorded in the KPI dictionary and reviewed quarterly.

## Certified and exploratory metrics

A **Certified** metric has an accountable owner, an approved definition, documented calculation logic, a named source, data-quality checks and an agreed refresh schedule. Certified metrics may be used in executive reporting.

An **Exploratory** metric can be used for analysis, but it must be visibly labelled and should not be used for executive or regulatory reporting until it has completed the certification process.

## Main assumptions

- September 2026 is the latest reporting month.
- Financial values are shown in AED.
- The credit approval rate is Approved Applications divided by Eligible Decisions.
- The 30+ DPD rate is based on principal balance, not customer count.
- The prototype uses synthetic monthly values rather than transaction-level records.
- Refresh times and service levels represent the proposed operating model, not an existing Mal process.

## Limitations and next steps

This is a working prototype, not a production banking platform. It does not include authentication, row-level security, automated pipelines or live data.

My next production steps would be:

1. confirm metric ownership and approval rights;
2. build the domain marts with Data Engineering;
3. move the calculations into a governed Power BI semantic model;
4. add automated freshness, completeness and reconciliation tests;
5. implement role-based access and release controls;
6. run user acceptance testing with Finance, Product and Credit.

## Repository structure

```text
.
|-- index.html    # Dashboard structure and five BI views
|-- styles.css    # Responsive layout and visual design
|-- data.js       # Synthetic values and KPI definitions
|-- app.js        # Navigation, filtering, charts and CSV export
`-- README.md     # Project rationale and interpretation
```
