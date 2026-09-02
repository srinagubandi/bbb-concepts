# Breathe Better Tonight — Concept Lab

This repository is the isolated design/development workspace for Breathe Better Tonight concept exploration.

## Production guardrail

**Do not modify `srinagubandi/breathebettertonight` from this project.** The production repository is intentionally separate.

## Current concepts

### Concept 01 — Symptom Immersion
Dark, cinematic, sleep/wellness direction with dimensional atmosphere and symptom-first storytelling.

Routes:
- `/symptom-immersion/`
- `/symptom-immersion/symptoms.html`
- `/symptom-immersion/assessment.html`
- `/symptom-immersion/providers.html`
- `/symptom-immersion/about.html`
- `/symptom-immersion/faq.html`

### Concept 02 — Clinical Airflow
Bright, premium healthcare direction with 3D airflow language, modular clinical clarity, and a stronger healthcare-system feel.

Routes:
- `/clinical-airflow/`
- `/clinical-airflow/symptoms.html`
- `/clinical-airflow/assessment.html`
- `/clinical-airflow/providers.html`
- `/clinical-airflow/about.html`
- `/clinical-airflow/faq.html`

## Shared strategy

Patient flow:
1. Symptom-first experience
2. Frequency/context
3. Insurance yes/no
4. Prior sleep apnea diagnosis
5. CPAP question only when previously diagnosed
6. First name, last name, phone, email, ZIP
7. Consent to provider follow-up
8. Treatment education only after lead capture

HCP positioning:
- General dentists and existing dental sleep medicine practices
- Marketing + qualified patient acquisition
- Exclusive geographic territories
- ZIP/proximity lead routing
- Appliance-agnostic
- No public pricing
- No guaranteed lead volume, revenue, or ROI claims
- Primary CTA: Check Territory Availability

## Run locally

```bash
npm install
npm start
```

Default port: `8080` or the value of `PORT`.

## Deployment

The repo is Railway-ready. The Express server serves `public/` and exposes `/health` for a basic health check.

## Prototype note

Assessment/provider forms currently demonstrate the UX only. They do not transmit or store personal information.
