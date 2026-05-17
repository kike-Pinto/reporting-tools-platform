# Reporting Tools Platform

A web platform for creating professional operational reports, shift handovers and PDF documents for industrial, construction, maintenance and field teams.

## Overview

Reporting Tools Platform is focused on reducing repetitive manual reporting work by providing simple browser-based tools with structured forms, live previews, automatic KPIs and PDF export.

The project is designed as a family of reusable reporting tools, not as a large ERP system.

## Current Tools

### Daily Report Generator

Create professional daily operational reports with:

- Project and shift details
- Daily summary
- Activities performed
- Automatic KPIs
- Safety / incidents section
- Observations and pending tasks
- Professional PDF export

### Shift Handover Generator

Create structured shift handover reports with:

- Outgoing and incoming shift details
- Work completed
- Equipment status
- Pending tasks
- Incidents and risks
- Recommendations
- Professional PDF export

## Guides

The platform also includes SEO-focused guides:

- How to Write a Daily Report
- How to Write a Shift Handover Report

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- App Router
- Browser print-to-PDF workflow

## Project Structure

```txt
app/
  tools/
    daily-report-generator/
    shift-handover-generator/
  guides/
    how-to-write-a-daily-report/
    how-to-write-a-shift-handover-report/
  sitemap.ts
  robots.ts

components/
  report/
  handover/
  home/
  layout/

lib/
  report/
  handover/
  tools.ts
  guides.ts
```
