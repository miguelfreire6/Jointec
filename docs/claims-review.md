# Marketing Claims Review

Reviewed: 2026-06-01

This ledger is the source-of-truth checklist for public copy changes. Do not add,
expand, or translate a factual claim unless it is listed as approved below or an
approved source has been attached to the review.

## Approved Facts

These facts were explicitly approved by the project owner:

- Jointec was founded in 1988.
- Jointec is the CAPE agent for `SE · CH · AT`.
- Jointec has three own machines.
- Commercial contact: `karl@jointec.se`.

## Confirmed By Official Public Sources

- Jointec's public site states `Since 1988` and lists Karl-Johan Berg,
  `+46 706 339 717`, and `karl@jointec.se`.
  Source: <https://www.jointec.se/>
- CAPE's official site describes machinery for pallets, stackers, and cable drums,
  and lists its address in Manlleu, Barcelona, Spain.
  Source: <https://cape.es/products>
- FEFPEB's official agenda lists the 73rd FEFPEB congress in Båstad, Sweden,
  from 30 September to 2 October 2026.
  Source: <https://www.fefpeb.eu/about/agenda>

## Needs Owner Evidence

The current site contains the following claims that are not covered by the
approved facts or the official public sources above. Treat them as pending until
the owner provides a datasheet, contract, customer approval, or other source.

### Agency And Company

- CAPE agency wording that expands the approved `SE · CH · AT` scope to all of
  Scandinavia, including `NO · DK · FI`.
- Exclusive-agency wording and the statement that the relationship was formalised
  in 2026.
- Team size, team roles, and the statement that the same engineers specify,
  install, and support every line.
- Claims about support languages, same-day remote resolution, stock held in
  Sweden, and service coverage.

### Performance And Specifications

- Homepage stats: `35%` less timber waste, `24/7` production continuity, and
  `100%` circular ambition.
- Klotsproduktionslinje performance, dimensions, footprint, power, operating
  model, kiln comparison, integration, and lead-time statements.
- Plastning Nonstop continuous-flow, film handling, recipe, sensor, footprint,
  conveyor, AGV, throughput, and lead-time statements.
- Topfoil Pallet compatibility, sealing, foil grade, footprint, throughput, UV,
  waste, and lead-time statements.
- The process-video description of adhesive mixing and `2.5 meter` beams.

### Installations And Events

- Gyllsjö Träindustri installation details, Siemens SIMATIC HMI details,
  five-year history, uptime language, customer quote, and permission to name the
  customer publicly.
- Anonymised installations listed on the Cases page.
- Claims that all three Jointec machines run live in Åsljunga, that the site is
  30 minutes from Båstad, and that transport is provided.
- News-page publication cadence and installation milestone statements.

### Regulatory

- PPWR compliance wording should be reviewed by a qualified legal or regulatory
  owner before publication. Do not present a machine purchase as a compliance
  shortcut without approved substantiation.

## Review Workflow

1. Attach approved source material to the issue or PR.
2. Update this ledger with the source and the specific approved wording.
3. Change public copy in all three locale files with identical keys.
4. Run locale parity checks and `npm run build`.
