// export async function fetchProjects() {
//   await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
//   return [
//     {
//       id: 1,
//       title: "Modern Villa Design",
//       category: "Residential",
//       image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
//       description:
//         "A striking contemporary villa designed to blend elegance with sustainability. Featuring a minimalist aesthetic, this home incorporates floor-to-ceiling windows, an open-concept layout, and smart-home technology. The design optimizes natural light while integrating energy-efficient materials like reclaimed wood and solar panels. A spacious outdoor area includes an infinity pool, fire pit, and lush landscaping, creating a seamless indoor-outdoor living experience.",
//       location: "Beverly Hills, CA",
//       year: "2023",
//       details: {
//         client: "Private Residence",
//         size: "5,000 sq ft",
//         duration: "18 months",
//         team: ["John Architect", "Sarah Designer", "Mike Engineer"],
//       },
//       gallery: [
//         "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//         "https://images.unsplash.com/photo-1600566752355-35795babbf19",
//       ],
//     },
//     {
//       id: 2,
//       title: "Urban Office Complex",
//       category: "Commercial",
//       image: "https://images.unsplash.com/photo-1486406146923-c433ef7b1f3f",
//       description:
//         "A cutting-edge office tower designed for the modern workforce. This 50,000 sq ft commercial hub features an open-plan workspace, collaborative zones, rooftop gardens, and a sleek glass façade that maximizes natural light. Sustainability is a key focus, with energy-efficient HVAC systems, smart lighting, and recycled materials used throughout the structure. The building also includes an advanced security system, ergonomic furnishings, and wellness-focused amenities like a gym and meditation spaces.",
//       location: "New York, NY",
//       year: "2023",
//       details: {
//         client: "TechCorp Inc.",
//         size: "50,000 sq ft",
//         duration: "24 months",
//         team: ["Emma Planner", "David Architect", "Lisa Engineer"],
//       },
//       gallery: [
//         "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",
//         "https://images.unsplash.com/photo-1497366216548-37526070297c",
//       ],
//     },
//     {
//       id: 3,
//       title: "Lakeside Retreat",
//       category: "Residential",
//       image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
//       description:
//         "A luxurious retreat harmoniously blending modern architecture with its natural surroundings. This lakeside home features panoramic water views, large glass walls, and eco-friendly materials. The design prioritizes relaxation, with expansive terraces, an outdoor fireplace, and a dock for water activities. Interiors include warm wood tones, minimalist furnishings, and a state-of-the-art kitchen.",
//       location: "Lake Tahoe, CA",
//       year: "2022",
//       details: {
//         client: "Private Family",
//         size: "3,200 sq ft",
//         duration: "14 months",
//         team: ["Alex Woods", "Taylor Stone", "Jordan Glass"],
//       },
//       gallery: [
//         "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
//         "https://images.unsplash.com/photo-1625602812206-5ec545ca1231",
//       ],
//     },
//     {
//       id: 4,
//       title: "Museum of Contemporary Art",
//       category: "Cultural",
//       image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
//       description:
//         "An innovative museum featuring dynamic and interactive exhibition spaces. The design focuses on fluidity and adaptability, using modular galleries that can be reconfigured for different exhibits. Natural lighting and open spaces create an inviting atmosphere for visitors, while the sustainable materials and energy-efficient systems reduce the building's environmental impact.",
//       location: "Chicago, IL",
//       year: "2021",
//       details: {
//         client: "City Arts Council",
//         size: "85,000 sq ft",
//         duration: "36 months",
//         team: ["Maria Curator", "Leo Sculptor", "Dana Lighting"],
//       },
//       gallery: [
//         "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae",
//         "https://images.unsplash.com/photo-1580130732478-4e339fb33746",
//       ],
//     },
//     {
//       id: 5,
//       title: "Sustainable Housing Complex",
//       category: "Residential",
//       image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
//       description:
//         "An eco-friendly housing community designed with net-zero energy principles. The complex features solar-powered homes, green roofs, and shared community gardens. Thoughtful urban planning fosters a sense of connection while ensuring sustainability remains at the core of the project.",
//       location: "Portland, OR",
//       year: "2023",
//       details: {
//         client: "Green Living Developers",
//         size: "120 units",
//         duration: "28 months",
//         team: ["Eco Team", "Solar Associates", "Green Builders"],
//       },
//       gallery: [
//         "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
//         "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
//       ],
//     },
//     {
//       id: 6,
//       title: "Luxury Beachfront Resort",
//       category: "Hospitality",
//       image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
//       description:
//         "A stunning beachfront resort offering a perfect blend of relaxation and adventure. This property features luxury villas, infinity pools, and direct access to pristine beaches. Designed with local materials, the resort emphasizes sustainability while providing top-notch amenities, including a spa, restaurant, and water sports facilities. The interiors reflect a coastal aesthetic, with expansive windows and natural light enhancing the serene atmosphere.",
//       location: "Malibu, CA",
//       year: "2023",
//       details: {
//         client: "Seaside Hospitality Group",
//         size: "200,000 sq ft",
//         duration: "30 months",
//         team: ["Coastal Designers", "Eco Builders", "Landscape Architects"],
//       },
//       gallery: [
//         "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
//         "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
//       ],
//     },
//     {
//       id: 7,
//       title: "Urban Green Park",
//       category: "Public Space",
//       image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
//       description:
//         "A revitalized urban park designed to enhance community engagement and promote biodiversity. This green space features walking trails, native flora, and interactive play areas for children. Sustainable landscaping practices were employed to maintain the park's ecological balance, while amenities like picnic spots and outdoor fitness stations encourage local residents to enjoy the outdoors.",
//       location: "Chicago, IL",
//       year: "2024",
//       details: {
//         client: "City of Chicago",
//         size: "30 acres",
//         duration: "18 months",
//         team: [
//           "Urban Planners",
//           "Landscape Architects",
//           "Community Engagement Specialists",
//         ],
//       },
//       gallery: [
//         "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
//         "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
//       ],
//     },
//   ];
// }

// export async function fetchProjectById(id: string) {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   const projects = await fetchProjects();
//   return projects.find((project) => project.id === parseInt(id)) || null;
// }
