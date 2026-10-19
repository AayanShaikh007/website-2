# Hardware web models

The project-page viewer is shared by hardware projects and downloads geometry only when requested. Multiple source assemblies are offered individually in a selector rather than inventing an assembled placement.

## Conversion

STEP inputs are tessellated with OpenCascade via occt-import-js in metre units, using 0.35 mm linear and 0.45 radian angular deflection (drone: 0.7 mm). Source Z-up geometry is rotated to glTF Y-up. Available CAD colours are retained; neutral material replaces missing appearance. Geometry is welded and compatible materials joined with glTF Transform, then quantized and Draco compressed. The exported GLBs are decoded again to check they can be read.

3MF inputs are read as ZIP/XML mesh resources, following build items, nested components, and affine transforms. Units are converted to metres and normals computed. The saved print arrangement is preserved. These models use a neutral material; they do not pretend to reproduce finished surface appearance.

## Available source models

- KB-01: assembled_w_switches.step. Case, PCB and switches, without finished keycap artwork.
- X-70: joystick_assembled v13.step (mechanism), throttle_assembled v15.step, joystick v10.step (grip). Offered separately.
- Splitboard: left and right assembled STEP files, offered separately.
- Sweatpad: completeassembly.3mf.
- Voronoi Mouse: Mouse design v3.step.
- H2@Home: dispenser.3mf and motor holder.3mf, explicitly labelled individual components.
- Mini Waymo: PRINT v1.3mf, showing printed wheels/axles, not a complete vehicle.

Repository paths are linked in cad-inventory.md. Original CAD remains in ignored work/cad-source and is not downloaded by the website.

## Missing exports

IEEE Heart and Nano LoRa have KiCad files but no component-complete 3D export in their repositories. No approximate/fabricated board models were substituted. AlertCore has no project repository linked publicly. K.A.R.E.N has no CAD source in its linked repository.

## Nano LoRa

Source: https://github.com/AayanShaikh007/Nano_LoRa. The README describes an RP2350B development board with battery support, LoRa communication and GPIO headers, inspired by the Pico keyboard project. The repository has KiCad schematic/layout, Gerbers, journal and a CC BY-NC 4.0 license. It does not publish project images; the portfolio uses a labelled text cover until genuine images are available. Group and Mosaic remain at the end of the catalogue.

## Validation

Astro diagnostics pass with zero errors, warnings or hints. The production build generates 20 pages. All 17 project routes and 76 image responses pass local HTTP checks. Converted hardware models decode successfully and pass the Khronos glTF validator without errors or warnings. The viewers and model switching were exercised in Edge. The optional viewer dependency remains a deferred large chunk.

