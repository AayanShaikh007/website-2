# KB-01 web model

Source: https://github.com/AayanShaikh007/KB-01/blob/main/CAD/assembled_w_switches.step

Converted on October 19, 2026 using occt-import-js (OpenCascade), glTF Transform, and Draco. The original STEP remains in ignored work/cad-source; no fabricated model geometry was added.

- Import unit: metre; linear tessellation deflection 0.0003 m; angular deflection 0.35 radians.
- Rotate original Z-up geometry to glTF Y-up, preserving assembly placement.
- Original tessellation: 732 mesh pieces, 310,152 triangles. Joined compatible material groups for rendering; this version is not prepared for an exploded view.
- Web asset: public/models/kb01.glb, 929,848 bytes, 4 meshes/material groups, Draco compression.
- Retains available CAD colours with neutral fallback material. The source assembly shows switches, without the finished keyboard's illustrated keycaps.
- Viewer and model download only when Explore in 3D is pressed. Local Draco decoders avoid third-party decoder requests. No automatic rotation or animation.
- Model was decoded again after export and visually loaded in the browser. Keyboard rotation and Reset view were checked. Source dimensions approximately 413 × 156 × 26 mm.

Decoder distribution is copied from three.js examples/jsm/libs/draco/gltf (Google Draco). See the included decoder license notice. No CAD converter runs in the visitor's browser.
