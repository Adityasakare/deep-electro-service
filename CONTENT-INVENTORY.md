# Source content inventory and approval notes

## Archive reviewed

`Bijlify Product wise catlog.zip` – 31 ZIP entries including folders, 8 PDF datasheets/catalogues, 3 Word documents and 10 JPEG product photographs.

### Documents

| Source file | Website use |
|---|---|
| `3.3KW/3.3 KW EV AC Charger.pdf` | 3.3 kW product page and downloadable datasheet |
| `7.4 -15 KW, 22 KW AC Chargers/7.4 KW AC Ty-02 Charger.pdf` | 7.4 kW product page and datasheet |
| `7.4 -15 KW, 22 KW AC Chargers/11 KW AC Ty-2 Charger.pdf` | 11 kW product page and datasheet |
| `7.4 -15 KW, 22 KW AC Chargers/22 KW AC Type -2 Charger.pdf` | 22 kW product page and datasheet |
| `30 KW DC Fast Chargers/X'TREME-30kW_Single_CCS2.pdf` | 30 kW product page and datasheet |
| `60 KW DC fast Chargers/Specification/x-treme-60kw-dual-ccs2-1.pdf` | 60 kW product page and datasheet |
| `120KW DC fast Chargers/120 KW dual Gun Charger.pdf` | 120 kW product page and datasheet |
| `240 KW DC Fast Chargers/X'TREME-240kW_Dual_CCS2.pdf` | 240 kW product page and datasheet |
| `Product application.docx` | Application segments and preliminary site planning guidance |
| `60 KW DC fast Chargers/Product USP.docx` | 60 kW dual-gun marketing claim; flagged for confirmation |
| `Warranty/Zen Bundle.docx` | Zen Bundle subscription section |

The 15 kW dual AC configuration is described in the application document and supported by a product photograph; no separate technical PDF was present in the archive.

### Images

Ten product JPEGs were found across 3.3 kW, AC Type-2, 15 kW dual AC, 30 kW, 60 kW and 240 kW folders. A generic illustration is used for the 120 kW card because the source archive did not contain a clearly identified 120 kW product photograph. A generic Deep Electro Services mark is used because no confirmed company logo file was present.

### Duplicate review

No byte-identical duplicate files were detected by SHA-256 hash among the extracted files.

## Website content structure

- Home: business positioning, product range and enquiry calls to action.
- About: company introduction and electrical-industry experience.
- Products: nine charger configurations, available photos, technical descriptions and source PDF downloads.
- Applications: residential, hospitality, highway, commercial, logistics/fleet and CPO applications.
- Zen Bundle: supplied ₹2.50/kWh description, hardware and software service inclusions.
- Contact: validated enquiry form that prepares an email; it does not claim to submit to a server.

## Items requiring approval before public launch

1. **60 kW single-gun output:** the supplied technical PDF labels the charger `60 kW [30 kW × 2]`, while the separate USP note describes up to 60 kW through one gun when the other is idle. Confirm the exact configuration and approved wording with Bijlify. The website flags this conflict.
2. **15 kW dual AC:** confirm product name, connector configuration and rated output from an approved datasheet.
3. **120 kW and 240 kW dual-gun output:** the 120 kW datasheet states 120 kW maximum and up to 60 kW simultaneously per car. The 240 kW datasheet title describes 120 kW × 2. Confirm current model variants and power-sharing behaviour before publishing more detailed per-gun claims.
4. **Electrical planning values:** the application guide states that supply, current, sanctioned load and area are preliminary recommendations. Confirm engineering values for each exact model and site.
5. **Business contact details:** supply approved business mobile number, email address and full postal/service address.
6. **Brand assets:** supply the approved Deep Electro Services logo and any brand guidelines if available.
7. **Domain and GitHub:** confirm the GitHub username/repository and confirm whether `www.deepelectrocharge.com` is the domain to activate. The deployment config contains it as a proposed domain but leaves custom-domain deployment disabled.
8. **Customer installation references:** approve names, photographs and any customer logos before adding a public projects/testimonials page. They are not published in this initial version.
9. **Enquiry backend:** select and approve a form provider or backend if enquiries must be delivered online rather than prepared as an email.
10. **Legal pages:** provide privacy policy, terms and any warranty/brand disclaimer wording required for public use.

No unverified testimonials, certifications, installation counts, pricing or guaranteed ROI claims have been added.
