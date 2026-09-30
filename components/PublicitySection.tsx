// import Image from "next/image";

// import courseCard from "@/public/course-card.png";
// import creatorDashboard from "@/public/creator-dashboard.png";

// const stats = [
//   {
//     value: "12K",
//     label: "Students",
//   },
//   {
//     value: "70+",
//     label: "Courses",
//   },
//   {
//     value: "16",
//     label: "Creators",
//   },
// ];

// const creatorBenefits = [
//   "Share Your Expertise",
//   "Monetize Your Passion",
//   "Flexibility and Autonomy",
//   "Build a Community",
// ];

// const PublicitySection = () => {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#FAFAFA]">
//       {/* Background glow effects */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-[152px] -top-[466px] h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(circle,rgba(203,252,1,0.4)_0%,rgba(203,252,1,0.092)_53%,rgba(203,252,1,0.024)_75%,rgba(203,252,1,0)_100%)] blur-[20px]" />

//         <div className="absolute -left-[508px] top-[183px] h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(circle,rgba(0,59,226,0.16)_0%,rgba(0,59,226,0.0368)_53%,rgba(0,59,226,0.0096)_75%,rgba(0,59,226,0)_100%)] blur-[20px]" />

//         <div className="absolute left-[722px] top-[788px] h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(circle,rgba(0,59,226,0.24)_0%,rgba(0,59,226,0.0552)_53%,rgba(0,59,226,0.0144)_75%,rgba(0,59,226,0)_100%)] blur-[20px]" />

//         <div className="absolute -left-[287px] top-[946px] h-[672px] w-[672px] rounded-full bg-[radial-gradient(circle,rgba(203,252,1,0.6)_0%,rgba(203,252,1,0.138)_53%,rgba(203,252,1,0.036)_75%,rgba(203,252,1,0)_100%)] blur-[20px]" />
//       </div>

//       <div className="relative mx-auto flex w-full max-w-[1258px] flex-col gap-[72px] px-6 py-[120px] lg:px-0">
//         {/* =========================================================
//             SECTION 1 — STUDENT / LEARNER
//         ========================================================== */}
//         <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-[63px]">
//           {/* Text */}
//           <div className="flex w-full flex-col gap-10 lg:w-[574px]">
//             <h2 className="max-w-[577px] font-[Poppins] text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528] lg:text-[44px]">
//               Your Path to Professional Growth Starts Here!
//             </h2>

//             <p className="max-w-[477px] font-sans text-[17px] font-normal leading-[160%] text-[#4B4C53] lg:text-[18px]">
//               Explore our curated selection of courses tailored to enhance your
//               capabilities and accelerate your career journey. Whether you are
//               looking to sharpen specific skills, gain industry expertise, or
//               embark on a new career path entirely, we have the resources you
//               need.
//             </p>

//             {/* Stats */}
//             <div className="flex items-end gap-10 sm:gap-14">
//               {stats.map((stat) => (
//                 <div key={stat.label} className="flex flex-col">
//                   <span className="font-[Poppins] text-[32px] font-medium leading-[44px] tracking-[-0.01em] text-[#003BE2] lg:text-[36px]">
//                     {stat.value}
//                   </span>

//                   <span className="font-sans text-[16px] leading-[160%] text-[#4B4C53] lg:text-[18px]">
//                     {stat.label}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Course visual */}
//           <div className="relative h-[450px] w-full lg:h-[552px] lg:w-[621px]">
//             {/* Main image */}
//             <div className="absolute left-0 top-3 w-full max-w-[577px]">
//               <Image
//                 src={courseCard}
//                 alt="Course learning interface"
//                 width={577}
//                 height={540}
//                 className="h-auto w-full object-contain drop-shadow-[20px_30px_50px_rgba(0,0,0,0.12)]"
//               />
//             </div>

//             {/* Learning progress card */}
//             <div className="absolute bottom-[40px] right-0 flex w-[232px] flex-col gap-2 rounded-2xl bg-white p-4 shadow-lg backdrop-blur-[10px] sm:bottom-[65px]">
//               <span className="font-sans text-sm font-medium leading-6 text-[#242528]">
//                 Learning Progress
//               </span>

//               <span className="font-[Poppins] text-[42px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
//                 55%
//               </span>

//               <div className="h-2 w-full overflow-hidden rounded-full bg-[#F6F6F6]">
//                 <div className="h-full w-[56%] rounded-full bg-[#D4FB20]" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* =========================================================
//             SECTION 2 — CREATOR
//         ========================================================== */}
//         <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-[79px]">
//           {/* Creator visual */}
//           <div className="relative h-[500px] w-full lg:h-[596px] lg:w-[541px]">
//             {/* Main dashboard image */}
//             <div className="absolute inset-0">
//               <Image
//                 src={creatorDashboard}
//                 alt="Course creator dashboard"
//                 width={435}
//                 height={596}
//                 className="mx-auto h-full w-auto object-contain drop-shadow-[20px_30px_50px_rgba(0,0,0,0.12)]"
//               />
//             </div>

//             {/* Total Revenue */}
//             <div className="absolute left-0 top-8 w-[232px] rounded-2xl bg-[#003BE2] p-4 backdrop-blur-[10px]">
//               <div className="flex flex-col">
//                 <span className="font-sans text-base font-medium leading-[120%] text-[#F5F5F6]">
//                   Total Revenue
//                 </span>

//                 <span className="font-sans text-[10px] leading-[120%] text-[#F5F5F6]">
//                   July 1-28
//                 </span>
//               </div>

//               <div className="mt-2 flex items-center justify-between">
//                 <span className="font-[Poppins] text-2xl font-semibold leading-8 text-[#F5F5F6]">
//                   $120.29
//                 </span>

//                 <span className="rounded-full bg-[#CBFC01] px-2 py-0.5 font-sans text-[10px] font-medium text-[#242528]">
//                   +12$
//                 </span>
//               </div>

//               <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
//                 <div className="h-full w-[56%] rounded-full bg-[#D4FB20]" />
//               </div>
//             </div>

//             {/* Year to Date */}
//             <div className="absolute left-0 top-[185px] w-[134px] rounded-2xl bg-[#003BE2] p-4 backdrop-blur-[10px]">
//               <span className="block font-sans text-base font-medium leading-[120%] text-[#F5F5F6]">
//                 Year to Date
//               </span>

//               <span className="block font-sans text-[10px] leading-[120%] text-[#F5F5F6]">
//                 2023
//               </span>

//               <span className="mt-2 block font-[Poppins] text-2xl font-semibold leading-8 text-[#F5F5F6]">
//                 $1,200.38
//               </span>

//               <span className="mt-2 inline-flex rounded-full bg-[#CBFC01] px-2 py-0.5 font-sans text-[10px] font-medium text-[#242528]">
//                 +12$
//               </span>
//             </div>

//             {/* Happy Students */}
//             <div className="absolute bottom-0 right-0 flex w-[258px] flex-col gap-2 rounded-2xl bg-white p-4 shadow-lg backdrop-blur-[10px]">
//               <div>
//                 <span className="block font-sans text-base font-medium leading-6 text-[#242528]">
//                   Happy Students
//                 </span>

//                 <span className="font-sans text-[10px] font-bold leading-[150%] text-[#242528]">
//                   4.5 (240)
//                 </span>
//               </div>

//               {/* Avatars */}
//               <div className="flex items-center">
//                 {Array.from({ length: 7 }).map((_, index) => (
//                   <div
//                     key={index}
//                     className="-ml-4 h-[43px] w-[43px] rounded-full border-2 border-white bg-[#D4FB20] first:ml-0"
//                   />
//                 ))}

//                 <div className="-ml-4 flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#D4FB20] font-sans text-xs font-bold text-[#242528]">
//                   2K+
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Creator text */}
//           <div className="flex w-full flex-col gap-10 lg:w-[580px]">
//             <h2 className="max-w-[391px] font-[Poppins] text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528] lg:text-[44px]">
//               Create & Manage Courses Easily.
//             </h2>

//             <p className="max-w-[574px] font-sans text-[17px] font-bold leading-7 text-[#242528] lg:text-[18px]">
//               ByteSpace supports individuals or entities in the creation,
//               publication, and administration of educational courses.
//             </p>

//             {/* Benefits */}
//             <div className="flex flex-col gap-4">
//               {creatorBenefits.map((benefit) => (
//                 <div key={benefit} className="flex items-center gap-2">
//                   <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#003BE2]">
//                     <span className="text-sm font-bold text-white">✓</span>
//                   </div>

//                   <span className="font-sans text-[17px] font-medium leading-[120%] text-[#242528] lg:text-[18px]">
//                     {benefit}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PublicitySection;
