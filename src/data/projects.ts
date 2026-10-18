// Project descriptions: old portfolio, Devpost, and linked repositories.
export const projects = [
  {
    "slug": "karen",
    "title": "K.A.R.E.N",
    "category": "FPGA · AI",
    "summary": "An FPGA assistant with voice interaction, Breakout, and a screensaver.",
    "paragraphs": [
      "An FPGA assistant with voice interaction, Breakout, and a screensaver.",
      "Built as a team at uOttaHack 8. A Python controller links speech and keyboard input with Gemini, voice output, and commands for the FPGA.",
      "SystemVerilog handles display timing, graphics, and mode changes. The project explores the boundary between flexible AI responses and deterministic hardware."
    ],
    "repo": "https://github.com/YimingH34/uottahack-8-karen",
    "source": "https://devpost.com/software/karen-5g01yk",
    "profileOnly": false,
    "image": "/images/projects/karen/cover.svg",
    "alt": "K.A.R.E.N — text cover, project photographs to be added",
    "gallery": []
  },
  {
    "slug": "campus-event-booking",
    "title": "Campus Event Booking",
    "category": "Java · JavaFX",
    "summary": "A collaborative ENGG1420 project for campus users, events, and bookings.",
    "paragraphs": [
      "A collaborative ENGG1420 project for campus users, events, and bookings.",
      "A Java application with a JavaFX interface for creating users, managing workshops, seminars and concerts, and handling registrations.",
      "Bookings support cancellation and a queue-based waitlist, with automatic promotion when a place opens. The repository includes Maven setup and JUnit tests."
    ],
    "repo": "https://github.com/AayanShaikh007/1420_final",
    "source": "https://github.com/AayanShaikh007/1420_final",
    "profileOnly": false,
    "image": "/images/projects/campus-event-booking/cover.svg",
    "alt": "Campus Event Booking — text cover, project photographs to be added",
    "gallery": []
  },
  {
    "slug": "alertcore",
    "title": "AlertCore",
    "category": "IoT",
    "image": "/images/projects/alertcore/1.jpg",
    "alt": "AlertCore — project overview 1",
    "summary": "AlertCore is an IoT-based industrial monitoring system designed to provide real-time awareness of equipment and workspace conditions. The system combines custom mechanical hardware, sensors, computer vision, and cellular connectivity into a compact field-deployable device.",
    "paragraphs": [
      "AlertCore is an IoT-based industrial monitoring system designed to provide real-time awareness of equipment and workspace conditions. The system combines custom mechanical hardware, sensors, computer vision, and cellular connectivity into a compact field-deployable device.",
      "As Hardware Engineering Lead, I designed and iterated custom enclosures and mechanical components in Fusion 360, developed prototypes through FDM 3D printing, and integrated LiDAR, camera, cellular, and embedded electronics. I also selected PETG-CF to improve prototype strength and durability, upgraded printer hardware to support composite filament, and troubleshot manufacturing issues through iterative testing and optimization.",
      "The project combines mechanical design, rapid prototyping, embedded systems, and IoT connectivity to create a practical hardware solution for industrial environments.",
      "Key Achievements: - Designed and iterated custom 3D-printed enclosures and components for industrial applications in Fusion 360 - Prototyped and refined hardware through FDM 3D printing, assembly, and iterative fit/function testing - Selected PETG-CF over standard PETG to improve mechanical strength and durability, and upgraded printer hardware with a hardened extruder/nozzle to support abrasive composite filament"
    ],
    "gallery": [
      {
        "src": "/images/projects/alertcore/1.jpg",
        "alt": "AlertCore — project overview 1"
      },
      {
        "src": "/images/projects/alertcore/2.jpg",
        "alt": "AlertCore — project detail 2"
      }
    ],
    "repo": "https://github.com/AayanShaikh007",
    "profileOnly": true
  },
  {
    "slug": "h2-at-home",
    "title": "H₂@Home",
    "category": "Embedded",
    "image": "/images/projects/h2-at-home/1.jpg",
    "alt": "H₂@Home — project overview 1",
    "summary": "Automation and monitoring software for a decentralized hydrogen generation system. Guelph Engineering Competition 2025 - Gold (1st Place).",
    "paragraphs": [
      "Automation and monitoring software for a decentralized hydrogen generation system. Guelph Engineering Competition 2025 - Gold (1st Place).",
      "Built a real-time analytics and control dashboard in React + JavaScript with Firebase over WiFi: live data visualization, component state mapping .",
      "Programmed ESP32 in C++ for GPIO/ADC integration with relays, gas sensors, and safety-trigger logic across 5+ hardware components.",
      "Stack: C++, JavaScript, React, Firebase, ESP32, IoT. (Nov. 2025)"
    ],
    "gallery": [
      {
        "src": "/images/projects/h2-at-home/1.jpg",
        "alt": "H₂@Home — project overview 1"
      },
      {
        "src": "/images/projects/h2-at-home/2.jpg",
        "alt": "H₂@Home — project detail 2"
      },
      {
        "src": "/images/projects/h2-at-home/3.jpg",
        "alt": "H₂@Home — project detail 3"
      }
    ],
    "repo": "https://github.com/AayanShaikh007/h2atHome",
    "profileOnly": false
  },
  {
    "slug": "x70-hotas",
    "title": "X-70 HOTAS",
    "category": "CAD",
    "image": "/images/projects/x70-hotas/1.png",
    "alt": "X-70 HOTAS — project overview 1",
    "summary": "A throttle and joystick HOTAS system designed from the ground up. Modelled after the X-56 HOTAS by Logitech.",
    "paragraphs": [
      "A throttle and joystick HOTAS system designed from the ground up. Modelled after the X-56 HOTAS by Logitech.",
      "The X-70 HOTAS is a flight control system designed for use in flight sims and space sims. HOTAS stands for Hands on Throttle and Stick, and they are used to control planes in flight simulators just like how Airbus pilots and fighter pilots use a joystick to control the plane's movements. I designed both the throttle and the joystick in this project, down to the very mechanism that their motion relies on. The X-70 is highly customizable and has a bunch of useful features that increase realism, including landing gear and flap change levers, various customizable switches, and a touchscreen display that can be customized to activate more features and display data.",
      "I was motivated to make this project mainly by my own interest in flight sims but also due to the fact that there arent many HOTAS systems on the market right now that have a comparable amount of features for a reasonable price. For instance, the Turtle Beach VelocityOne flightdeck goes for around $500 CAD, which isnt very affordable. There is a lack of a affordable mid series detached HOTAS system that is still capable and reliable.",
      "I journalled this project extensively on Github, just look for the file named JOURNAL.md and click them to see the entire engineering and build process"
    ],
    "gallery": [
      {
        "src": "/images/projects/x70-hotas/1.png",
        "alt": "X-70 HOTAS — project overview 1"
      },
      {
        "src": "/images/projects/x70-hotas/2.png",
        "alt": "X-70 HOTAS — project detail 2"
      },
      {
        "src": "/images/projects/x70-hotas/3.png",
        "alt": "X-70 HOTAS — design documentation 3"
      },
      {
        "src": "/images/projects/x70-hotas/4.png",
        "alt": "X-70 HOTAS — design documentation 4"
      },
      {
        "src": "/images/projects/x70-hotas/5.png",
        "alt": "X-70 HOTAS — design documentation 5"
      },
      {
        "src": "/images/projects/x70-hotas/6.png",
        "alt": "X-70 HOTAS — design documentation 6"
      },
      {
        "src": "/images/projects/x70-hotas/7.png",
        "alt": "X-70 HOTAS — project detail 7"
      }
    ],
    "repo": "https://github.com/AayanShaikh007/X-70-HOTAS",
    "profileOnly": false
  },
  {
    "slug": "kb01",
    "title": "KB-01",
    "category": "Hardware",
    "image": "/images/projects/kb01/1.png",
    "alt": "KB-01 — design documentation 1",
    "summary": "I've always wanted to make a mechanical keyboard, and after owning two proprietary keyboards, I had an idea of what features I wanted to incorporate in my final design. To begin, I love the OLED display in the high end steelseries keyboards, so that was a must-add. One of my keyboards, a Corsair K65, broke after I tried to fix a malfunctioning switch and damaged the board, shorting the traces for a few surrounding keys. It is due to this that I decided to make this keyboard hot-swappable, so that you can easily swap switches (mx and kalih).",
    "paragraphs": [
      "I've always wanted to make a mechanical keyboard, and after owning two proprietary keyboards, I had an idea of what features I wanted to incorporate in my final design. To begin, I love the OLED display in the high end steelseries keyboards, so that was a must-add. One of my keyboards, a Corsair K65, broke after I tried to fix a malfunctioning switch and damaged the board, shorting the traces for a few surrounding keys. It is due to this that I decided to make this keyboard hot-swappable, so that you can easily swap switches (mx and kalih).",
      "I extensively journalled this project on my github, just look for the file named JOURNAL.md and click them to see the entire engineering and build process."
    ],
    "gallery": [
      {
        "src": "/images/projects/kb01/1.png",
        "alt": "KB-01 — design documentation 1"
      },
      {
        "src": "/images/projects/kb01/2.jpg",
        "alt": "KB-01 — assembled keyboard 2"
      },
      {
        "src": "/images/projects/kb01/3.png",
        "alt": "KB-01 — design documentation 3"
      },
      {
        "src": "/images/projects/kb01/4.png",
        "alt": "KB-01 — design documentation 4"
      }
    ],
    "repo": "https://github.com/AayanShaikh007/KB-01",
    "profileOnly": false
  },
  {
    "slug": "ieee-led-heart",
    "title": "IEEE LED Heart",
    "category": "PCB design",
    "image": "/images/projects/ieee-led-heart/1.png",
    "alt": "IEEE LED Heart — project overview 1",
    "summary": "A custom heart-shaped LED PCB designed in KiCad for IEEE. This project focuses on a clean schematic, sensible footprints, and an aesthetic heart-shaped board outline with LED lighting patterns.",
    "paragraphs": [
      "A custom heart-shaped LED PCB designed in KiCad for IEEE. This project focuses on a clean schematic, sensible footprints, and an aesthetic heart-shaped board outline with LED lighting patterns.",
      "The repository provides the full KiCad project files: schematic (`.kicad_sch`), PCB layout (`.kicad_pcb`), and project metadata. It serves as a learning and showcase build for PCB design workflows, from schematic capture to layout and manufacturing preparation.",
      "Explore the KiCad files to see net organization, LED placement strategies, and board constraints. The commit history documents incremental design changes and iteration."
    ],
    "gallery": [
      {
        "src": "/images/projects/ieee-led-heart/1.png",
        "alt": "IEEE LED Heart — project overview 1"
      },
      {
        "src": "/images/projects/ieee-led-heart/2.png",
        "alt": "IEEE LED Heart — design documentation 2"
      },
      {
        "src": "/images/projects/ieee-led-heart/3.png",
        "alt": "IEEE LED Heart — design documentation 3"
      },
      {
        "src": "/images/projects/ieee-led-heart/4.png",
        "alt": "IEEE LED Heart — design documentation 4"
      }
    ],
    "repo": "https://github.com/AayanShaikh007/IEEE-LED-Heart-PCB",
    "profileOnly": false
  },
  {
    "slug": "group",
    "title": "Group",
    "category": "Software",
    "image": "/images/projects/group/1.png",
    "alt": "Group — design documentation 1",
    "summary": "An Expo-based mobile app that uses technology to bring people together by making gatherings less stressful to manage. Built with TypeScript, file-based routing, and modern Expo tooling.",
    "paragraphs": [
      "An Expo-based mobile app that uses technology to bring people together by making gatherings less stressful to manage. Built with TypeScript, file-based routing, and modern Expo tooling."
    ],
    "gallery": [
      {
        "src": "/images/projects/group/1.png",
        "alt": "Group — design documentation 1"
      },
      {
        "src": "/images/projects/group/2.png",
        "alt": "Group — design documentation 2"
      },
      {
        "src": "/images/projects/group/3.png",
        "alt": "Group — design documentation 3"
      }
    ],
    "repo": "https://github.com/AayanShaikh007/Group",
    "profileOnly": false
  },
  {
    "slug": "delivery-drone",
    "title": "Delivery Drone",
    "category": "Robotics",
    "image": "/images/projects/delivery-drone/1.png",
    "alt": "Delivery Drone — project image 1",
    "summary": "A polished multipurpose drone designed to carry various payloads including thermal or regular cameras with gimbal. The goal is to create a drone that is both capable and purpose-flexible, as most commercial drones like DJI models are limited to single-purpose tasks.",
    "paragraphs": [
      "A polished multipurpose drone designed to carry various payloads including thermal or regular cameras with gimbal. The goal is to create a drone that is both capable and purpose-flexible, as most commercial drones like DJI models are limited to single-purpose tasks.",
      "My interest in drones sparked in Grade 4 when I saw a DJI Phantom used for photography at a welcoming parade in Toronto. I've been intrigued by drones and their applications ever since. However, I find it frustrating that companies commercialize drones for single purposes. There are merits to creating drones that can handle multiple tasks such as FPV flying combined with casual photography to reduce consumer waste.",
      "Due to increasing traffic congestion in cities, I aim to prototype a delivery drone that could eventually be scaled for autonomous delivery of everyday essentials. The drone will be medium to large sized (250-400mm or 400+mm), featuring CAN bus-capable flight controllers like the Pixhawk 6C Mini, GNSS systems, and a 3D-printed PETG frame.",
      "Key features include: return-to-home, obstacle avoidance, autonomous flight-and-follow, autonomous address-based package delivery, and a DJI Dock-like auto-landing system. This project heavily leverages CAD design and 3D printing to create functional components with solid attachment points for payloads, including string-based attachment and package release mechanisms.",
      "This is an excellent learning opportunity to develop skills in CAD analysis, functional 3D printing, embedded systems, and autonomous flight algorithms. Check the JOURNAL.md file on GitHub to follow the entire engineering and build process."
    ],
    "gallery": [
      {
        "src": "/images/projects/delivery-drone/1.png",
        "alt": "Delivery Drone — project image 1"
      },
      {
        "src": "/images/projects/delivery-drone/2.png",
        "alt": "Delivery Drone — project image 2"
      },
      {
        "src": "/images/projects/delivery-drone/3.png",
        "alt": "Delivery Drone — project image 3"
      },
      {
        "src": "/images/projects/delivery-drone/4.png",
        "alt": "Delivery Drone — project image 4"
      },
      {
        "src": "/images/projects/delivery-drone/5.png",
        "alt": "Delivery Drone — project image 5"
      }
    ],
    "repo": "https://github.com/AayanShaikh007/drone",
    "profileOnly": false
  },
  {
    "slug": "splitboard",
    "title": "Splitboard",
    "category": "Hardware",
    "image": "/images/projects/splitboard/1.png",
    "alt": "Splitboard — project image 1",
    "summary": "A DIY split keyboard modelled after the Ergodox with wireless Bluetooth connectivity and on-board battery charging/management.",
    "paragraphs": [
      "A DIY split keyboard modelled after the Ergodox with wireless Bluetooth connectivity and on-board battery charging/management.",
      "Designed for ergonomics and portability: two independent halves that can be arranged freely. Incorporates RGB lighting and Kailh hotswap sockets, with a refined case (low-profile walls ~3mm) and a voronoi pattern underside.",
      "See the repo for CAD, PCB, firmware, and a detailed BOM along with design notes in the journal."
    ],
    "gallery": [
      {
        "src": "/images/projects/splitboard/1.png",
        "alt": "Splitboard — project image 1"
      },
      {
        "src": "/images/projects/splitboard/2.png",
        "alt": "Splitboard — project image 2"
      },
      {
        "src": "/images/projects/splitboard/3.png",
        "alt": "Splitboard — project image 3"
      },
      {
        "src": "/images/projects/splitboard/4.png",
        "alt": "Splitboard — project image 4"
      }
    ],
    "repo": "https://github.com/AayanShaikh007/splitboard",
    "profileOnly": false
  },
  {
    "slug": "underwriting-dashboard",
    "title": "Underwriting Dashboard",
    "category": "Software",
    "image": "/images/projects/underwriting-dashboard/1.png",
    "alt": "Underwriting Dashboard — project image 1",
    "summary": "A hackathon project (Hack the North 2025) re-imagining the RiskOps landing page for insurance underwriters. The Smart Underwriting Dashboard uses AI to score submissions against a carrier's appetite, surfaces high-value risks first, and provides adjustable parameters and portfolio analytics.",
    "paragraphs": [
      "A hackathon project (Hack the North 2025) re-imagining the RiskOps landing page for insurance underwriters. The Smart Underwriting Dashboard uses AI to score submissions against a carrier's appetite, surfaces high-value risks first, and provides adjustable parameters and portfolio analytics.",
      "How it’s used: AI reviews each insurance submission to determine fit within appetite and assesses risk, delivering a 0-100 score to accelerate underwriter workflow. The dashboard includes tuning pages for appetite parameters and an adaptive portfolio view showing performance metrics (policies, payouts, customers, etc.)."
    ],
    "gallery": [
      {
        "src": "/images/projects/underwriting-dashboard/1.png",
        "alt": "Underwriting Dashboard — project image 1"
      },
      {
        "src": "/images/projects/underwriting-dashboard/2.png",
        "alt": "Underwriting Dashboard — project image 2"
      },
      {
        "src": "/images/projects/underwriting-dashboard/3.png",
        "alt": "Underwriting Dashboard — project image 3"
      },
      {
        "src": "/images/projects/underwriting-dashboard/4.png",
        "alt": "Underwriting Dashboard — project image 4"
      },
      {
        "src": "/images/projects/underwriting-dashboard/5.png",
        "alt": "Underwriting Dashboard — project image 5"
      },
      {
        "src": "/images/projects/underwriting-dashboard/6.png",
        "alt": "Underwriting Dashboard — project image 6"
      }
    ],
    "repo": "https://github.com/AayanShaikh007/htnfederato",
    "profileOnly": false
  },
  {
    "slug": "sweatpad",
    "title": "Sweatpad",
    "category": "Hardware",
    "image": "/images/projects/sweatpad/1.png",
    "alt": "Sweatpad — project image 1",
    "summary": "A compact 16-key gaming hackpad focused on ergonomics, with RGB lighting and an OLED display. Built around SEEEDUINO XIAO RP2040, MX-style switches, 1N4148 diodes, SK6812 MINI-E LEDs, and DSA keycaps.",
    "paragraphs": [
      "A compact 16-key gaming hackpad focused on ergonomics, with RGB lighting and an OLED display. Built around SEEEDUINO XIAO RP2040, MX-style switches, 1N4148 diodes, SK6812 MINI-E LEDs, and DSA keycaps.",
      "The repo includes CAD, PCB, firmware, and a BOM, plus notes on design constraints (e.g., 100x100 mm PCB restriction) and case adjustments."
    ],
    "gallery": [
      {
        "src": "/images/projects/sweatpad/1.png",
        "alt": "Sweatpad — project image 1"
      },
      {
        "src": "/images/projects/sweatpad/2.png",
        "alt": "Sweatpad — project image 2"
      },
      {
        "src": "/images/projects/sweatpad/3.png",
        "alt": "Sweatpad — project image 3"
      },
      {
        "src": "/images/projects/sweatpad/4.png",
        "alt": "Sweatpad — project image 4"
      }
    ],
    "repo": "https://github.com/AayanShaikh007/sweatpad",
    "profileOnly": false
  },
  {
    "slug": "mini-waymo",
    "title": "Mini Waymo",
    "category": "Robotics",
    "image": "/images/projects/mini-waymo/1.png",
    "alt": "Mini Waymo — project image 1",
    "summary": "A miniature autonomous-style vehicle with ultrasonic object avoidance. Powertrain uses dual N20 DC motors driven by an Adafruit DRV8833; chassis composed of breadboards, zip ties, and cardboard. Attempted Pi Zero-based computer vision; partial success with obstacle response and movement.",
    "paragraphs": [
      "A miniature autonomous-style vehicle with ultrasonic object avoidance. Powertrain uses dual N20 DC motors driven by an Adafruit DRV8833; chassis composed of breadboards, zip ties, and cardboard. Attempted Pi Zero-based computer vision; partial success with obstacle response and movement.",
      "See README for build notes, schematic references, and a demo link showing the vehicle responding to obstructions."
    ],
    "gallery": [
      {
        "src": "/images/projects/mini-waymo/1.png",
        "alt": "Mini Waymo — project image 1"
      }
    ],
    "repo": "https://github.com/AayanShaikh007/mini-waymo",
    "profileOnly": false
  },
  {
    "slug": "head-tracking-mouse",
    "title": "Head Tracking Mouse",
    "category": "Computer vision",
    "image": "/images/projects/head-tracking-mouse/1.jpg",
    "alt": "Head Tracking Mouse — project image 1",
    "summary": "Hands-free cursor control using computer vision to track head movements and detect mouth openings via a webcam. Translates facial landmarks into mouse movements and clicks using OpenCV, MediaPipe, PyAutoGUI, and Keyboard.",
    "paragraphs": [
      "Hands-free cursor control using computer vision to track head movements and detect mouth openings via a webcam. Translates facial landmarks into mouse movements and clicks using OpenCV, MediaPipe, PyAutoGUI, and Keyboard.",
      "See the release and README for setup instructions and usage details."
    ],
    "gallery": [
      {
        "src": "/images/projects/head-tracking-mouse/1.jpg",
        "alt": "Head Tracking Mouse — project image 1"
      }
    ],
    "repo": "https://github.com/AayanShaikh007/Visioneersubmission",
    "profileOnly": false
  },
  {
    "slug": "voronoi-mouse",
    "title": "Voronoi Mouse",
    "category": "CAD",
    "image": "/images/projects/voronoi-mouse/1.png",
    "alt": "Voronoi Mouse — project image 1",
    "summary": "A custom 3D-modelled mouse with a breathable voronoi design for comfort during long use. The build journal documents iterative design steps from base outline and low-poly form to button mechanism and final ergonomic tweaks.",
    "paragraphs": [
      "A custom 3D-modelled mouse with a breathable voronoi design for comfort during long use. The build journal documents iterative design steps from base outline and low-poly form to button mechanism and final ergonomic tweaks."
    ],
    "gallery": [
      {
        "src": "/images/projects/voronoi-mouse/1.png",
        "alt": "Voronoi Mouse — project image 1"
      },
      {
        "src": "/images/projects/voronoi-mouse/2.png",
        "alt": "Voronoi Mouse — project image 2"
      },
      {
        "src": "/images/projects/voronoi-mouse/3.png",
        "alt": "Voronoi Mouse — project image 3"
      }
    ],
    "repo": "https://github.com/AayanShaikh007/mouse",
    "profileOnly": false
  }
];
