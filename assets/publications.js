const publications = [

{
year: 2026,
type: "international-list",
text: `[J2] “Faster GF(2)[x] polynomial multiplication using SIMD instructions,”
<b>Jihoon Jang</b>, Myeonghoon Lee, Suhri Kim, Seokhie Hong, Sangjin Lee,
<i>Journal of Cryptographic Engineering (JCEN)</i> (Accepted).`
},
{
year: 2025,
type: "international-list",
text: `[J1] “Improved Frobenius FFT for Code-Based Cryptography on Cortex-M4,”
Myeonghoon Lee, <b>Jihoon Jang</b>, Suhri Kim, Seokhie Hong,
<i>IEEE Internet of Things Journal (IoT-J)</i>.`
},



{
year: 2025,
type: "domestic-list",
text: `“Optimizing Falcon Key Generation and Sign Algorithm on Cortex-M7,”
Hyunju Park, Myeonghoon Lee, <b>Jihoon Jang</b>, Suhri Kim, Seokhie Hong,
<i>Journal of the Korea Institute of Information Security & Cryptology (JKIISC)</i>, 2025.`
},
{
year: 2024,
type: "domestic-list",
text: `“Optimized Implementation of GF(2)[x] Multiplication for HQC on AVX2,”
<b>Jihoon Jang</b>, Myeonghoon Lee, Suhri Kim, Seogchung Seo, Seokhie Hong,
<i>Journal of the Korea Institute of Information Security & Cryptology (JKIISC)</i>.`
},



{
year: 2025,
type: "preprint",
text: `“Efficient Polynomial Multiplication for HQC on ARM Cortex-M4,”
<b>Jihoon Jang</b>, Myeonghoon Lee, Donggeun Kwon, Seokhie Hong, Suhri Kim, Sangjin Lee,
<i>Cryptology ePrint Archive</i>, 2025.`
},



{
year: 2025,
type: "domestic-list",
text: `“Benchmark of a QSF-Based Hybrid KpqC KEM on Cortex-M4,”
<b>Jihoon Jang</b>, Taehun Kang, Myeonghoon Lee, Byoungjin Seok, Suhri Kim, Seokhie Hong, Sangjin Lee,
<i>Proceedings of the Conference on Information Security and Cryptology Winter 2025 (CISC-W'25)</i>.`
},
{
year: 2025,
type: "domestic-list",
text: `“Efficient ffSampling in Dynamic Falcon Implementations,”
Hyunju Park, Myeonglee Lee, <b>Jihoon Jang</b>, Suhri Kim, Seokhie Hong,
<i>Proceedings of the Conference on Information Security and Cryptology Summer 2025 (CISC-S'25)</i>.`
},
{
year: 2024,
type: "domestic-list",
text: `“Optimization of HQC GF(2)[x] Polynomial Multiplication Using AVX2 and VPCLMULQDQ Instructions,”
<b>Jihoon Jang</b>, Myeonghoon Lee, Suhri Kim, Seokhie Hong,
<i>Proceedings of the Conference on Information Security and Cryptology Winter 2024 (CISC-W'24)</i>.`
},
{
year: 2024,
type: "domestic-list",
text: `“Performance Analysis of Round 2 KpqC Algorithms Considering Transmission Cost in Communication Environments,”
Je-Bin Kim, <b>Jihoon Jang</b>, Myeonghoon Lee, Suhri Kim, Jaechul Sung, Seokhie Hong,
<i>Proceedings of the Conference on Information Security and Cryptology Winter 2024 (CISC-W'24)</i>.`
},
{
year: 2024,
type: "domestic-list",
text: `“Analysis of MPC-in-the-Head Digital Signatures in PQC Additional Digital Signature Round 1,”
<b>Jihoon Jang</b>, JeongHwan Lee, Myeonghoon Lee, Suhri Kim, Seokhie Hong,
<i>Proceedings of the Conference on Information Security and Cryptology Summer 2024 (CISC-S'24)</i>.`
},
{
year: 2024,
type: "domestic-list",
text: `“Optimize strategy for HQC Algorithm on Cortex-M4 microcontroller,”
Myeonghoon Lee, <b>Jihoon Jang</b>, Suhri Kim, Seokhie Hong,
<i>Proceedings of the Conference on Information Security and Cryptology Summer 2024 (CISC-S'24)</i>.`
},
{
year: 2023,
type: "domestic-list",
text: `“Analysis of the Implementation Efficiency of variant AES ShiftRows from the Fixslicing Perspective,”
Hanbeom Shin, Myoungsu Shin, <b>Jihoon Jang</b>, Gyusang Kim, Myeonghoon Lee, Seogchung Seo, Seokhie Hong,
<i>Proceedings of the Conference on Information Security and Cryptology Winter 2023 (CISC-W'23)</i>.`
},
{
year: 2023,
type: "domestic-list",
text: `“Optimized Implementation of GF(2)[x] Polynomial Multiplication in HQC,”
<b>Jihoon Jang</b>, MyeongHoon Lee, Suhri Kim, Seog Chung Seo, Seokhie Hong,
<i>Proceedings of the Conference on Information Security and Cryptology Summer 2023 (CISC-S'23)</i>.`
}

];

// 자동 정렬 코드
// publications.sort((a,b)=>b.year-a.year);

// const pubList = document.getElementById("pub-list");

// publications.forEach(p => {

// const li = document.createElement("li");

// li.innerHTML = p.text + " (" + p.year + ")";

// pubList.appendChild(li);

// });
publications.sort((a,b)=>b.year-a.year);

const internationalList = document.getElementById("international-list");
const domesticList = document.getElementById("domestic-list");
const subList = document.getElementById("submission-list");
const preprintList = document.getElementById("preprint-list");

publications.forEach(p => {

const li = document.createElement("li");
li.innerHTML = p.text + " (" + p.year + ")";

if(p.type === "domestic-list"){
domesticList.appendChild(li);
}

else if(p.type === "international-list"){
internationalList.appendChild(li);
}

else if(p.type === "journal-submission"){
subList.appendChild(li);
}

else if(p.type === "preprint"){
preprintList.appendChild(li);
}

});