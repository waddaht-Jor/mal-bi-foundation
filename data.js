const BI_DATA = {
  months: ["Oct '25","Nov","Dec","Jan '26","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],
  monthly: {
    netRevenue: [8.6,9.1,9.4,9.8,10.3,10.9,11.4,12.0,12.7,13.1,13.8,14.6],
    paymentVolume: [228,241,259,271,296,318,341,372,405,438,472,519],
    activeCustomers: [82410,86100,90220,94180,98760,103400,108630,113900,118540,122010,125380,128420],
    dpd30: [2.9,2.8,2.7,2.6,2.5,2.4,2.5,2.4,2.6,2.7,2.8,2.8]
  },
  execKpis: [
    {name:'Active customers',value:'128.4K',change:'+2.4%',tone:'up',domain:'Product',note:'30-day transacting'},
    {name:'Net revenue',value:'AED 14.6M',change:'+5.8%',tone:'up',domain:'Finance',note:'Current month'},
    {name:'Payment volume',value:'AED 519M',change:'+10.0%',tone:'up',domain:'Payments',note:'Settled TPV'},
    {name:'Savings balance',value:'AED 742M',change:'+6.1%',tone:'up',domain:'Savings',note:'Closing balance'},
    {name:'Credit approval rate',value:'42.5%',change:'+1.3 pp',tone:'up',domain:'Credit',note:'Eligible decisions'},
    {name:'Loan book',value:'AED 386M',change:'+4.7%',tone:'up',domain:'Credit',note:'Principal outstanding'},
    {name:'30+ DPD rate',value:'2.8%',change:'+0.0 pp',tone:'flat',domain:'Credit',note:'Limit ≤ 3.0%'},
    {name:'Cost-to-income',value:'58.4%',change:'−2.1 pp',tone:'up',domain:'Finance',note:'Lower is better'}
  ],
  customerMix: [{label:'Credit',value:58400,color:'#246bfd'},{label:'Payments only',value:43720,color:'#20c997'},{label:'Savings only',value:26300,color:'#7c5cff'}],
  funnel: [{label:'Applications',value:24500},{label:'Eligible',value:19840},{label:'Approved',value:8430},{label:'Accepted',value:6720},{label:'Booked',value:6190}],
  quality: [{label:'Current',value:350.5,color:'#246bfd'},{label:'1–29 DPD',value:24.7,color:'#f7b955'},{label:'30–89 DPD',value:8.2,color:'#f58a4b'},{label:'90+ DPD',value:2.6,color:'#e45555'}],
  definitions: [
    {team:'Finance',value:'151,880',label:'Monthly funded customers',text:'Any open customer relationship with a non-zero end-of-month balance.',delta:'+18.3%',status:'Not comparable'},
    {team:'Product',value:'132,640',label:'28-day engaged customers',text:'Login, application, payment, transfer or savings action in the last 28 days.',delta:'+3.3%',status:'Too broad'},
    {team:'Credit',value:'61,230',label:'Active borrowers',text:'Customer with an open loan facility or a repayment in the current month.',delta:'−52.3%',status:'Domain-specific'}
  ],
  metrics: [
    ['Active customers','Product','Distinct non-test customers with ≥1 qualifying settled transaction in trailing 30 calendar days.','COUNTD(customer_id) where qualifying_activity','mart_customer_daily','Daily 06:00 GST','Certified'],
    ['Net revenue','Finance','Recognised interest and fee income less refunds, rewards and direct transaction costs.','interest + fees − refunds − rewards − direct_cost','mart_finance_daily','Daily 07:00 GST','Certified'],
    ['Payment volume','Payments','Gross value of settled customer-initiated payment transactions; reversals excluded.','SUM(settled_amount_aed)','mart_payments','Hourly','Certified'],
    ['Savings balance','Savings','End-of-period ledger balance across open customer savings accounts.','SUM(closing_ledger_balance_aed)','mart_deposits_daily','Daily 06:00 GST','Certified'],
    ['Credit approval rate','Credit','Approved applications as a share of applications reaching an eligible credit decision.','approved / eligible_decisions','mart_credit_funnel','Daily 06:30 GST','Certified'],
    ['Loan book','Credit','Outstanding principal on open, disbursed credit facilities.','SUM(principal_outstanding_aed)','mart_lending_daily','Daily 06:30 GST','Certified'],
    ['30+ DPD rate','Credit','Principal balance ≥30 days past due divided by total principal outstanding.','balance_dpd_30_plus / principal_outstanding','mart_lending_daily','Daily 06:30 GST','Certified'],
    ['90+ DPD rate','Credit','Principal balance ≥90 days past due divided by total principal outstanding.','balance_dpd_90_plus / principal_outstanding','mart_lending_daily','Daily 06:30 GST','Certified'],
    ['Cost-to-income','Finance','Operating expenses divided by net operating income for the reporting period.','operating_expense / net_operating_income','mart_finance_daily','Monthly WD+3','Certified'],
    ['Application-to-booking rate','Credit','Booked facilities divided by submitted unique applications.','booked / applications','mart_credit_funnel','Daily 06:30 GST','Certified'],
    ['Approval-to-acceptance rate','Credit','Accepted offers divided by approved applications.','accepted / approved','mart_credit_funnel','Daily 06:30 GST','Certified'],
    ['Average loan size','Credit','Original principal of booked facilities divided by booked facilities.','SUM(original_principal) / COUNTD(facility_id)','mart_lending_daily','Daily 06:30 GST','Certified'],
    ['Customer acquisition cost','Product','Eligible acquisition spend divided by newly activated customers.','acquisition_spend / new_activated_customers','mart_growth_monthly','Monthly WD+5','Certified'],
    ['Payment success rate','Payments','Settled payment attempts divided by valid payment attempts.','settled_attempts / valid_attempts','mart_payments','Hourly','Certified'],
    ['Deposit concentration','Savings','Share of total savings balance held by the largest 1% of customers.','top_1pct_balance / total_balance','mart_deposits_daily','Daily 06:00 GST','Certified'],
    ['New-to-bank 30+ DPD','Credit','30+ DPD balance rate for customers whose first Mal product opened within 12 months.','ntb_balance_dpd30 / ntb_principal','mart_lending_daily','Daily 06:30 GST','Exploratory'],
    ['Primary account proxy','Product','Customers receiving salary-like credits in two of the trailing three months.','COUNTD(customer_id) meeting salary rule','sandbox_customer_signals','Weekly Monday','Exploratory'],
    ['Risk-adjusted margin','Finance','Net revenue less expected credit loss, divided by average earning assets.','(net_revenue − ecl) / avg_earning_assets','mart_profitability_monthly','Monthly WD+5','Exploratory']
  ]
};
