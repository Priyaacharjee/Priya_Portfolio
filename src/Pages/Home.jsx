import { useRef } from "react";
import Footer from "../Components/Footer";
import AnimatedEmojis from "../Components/AnimatedEmojis";
export default function Home() {
  const certificates = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Ardent Computech Ltd.",
      focus: "MERN Stack",
      image: "/Images/Ardent.png",
      pdfLink: "/Certificates/Ardent_FullStack.pdf"
    },
    {
      id: 2,
      title: "Java DSA",
      issuer: "Apna College",
      focus: "Java DSA",
      image: "/Images/Java.png",
      pdfLink: "/Certificates/Java.pdf"
    },

  ];

  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert("Your message is sent!");
    if (inputRef.current) {
      inputRef.current.value = ""; 
    }
  };

  return (
    <>
      {/* -------------------Hero section--------------- */}
      <section className="relative flex flex-col items-center text-center py-20 bg-blue-50 overflow-hidden h-56" id="home">
        {/* Randomly Positioned Tech Emojis */}
        <AnimatedEmojis />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 mt-[-2rem]">
          Hey There! I&apos;m <span className="text-4xl" style={{ fontFamily: 'Dancing Script, cursive' }}>Priya</span><br /> Introducing <span className="text-4xl" style={{ fontFamily: 'Dancing Script, cursive' }}>My Portfolio</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Welcome to my online showcase of web development expertise and projects
        </p>

        <div className="relative h-full w-full flex items-center justify-center">
          <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
            <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <svg viewBox="0 0 128 128">
                  <g fill="#61DAFB"><circle r="11.4" cy="64" cx="64"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                </svg>
              </span>
            </button>

            <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <svg viewBox="0 0 48 48" y="0px" x="0px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z" fill="#00acc1"></path>
                </svg>
              </span>
            </button>

            <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0" fill="#0acf83"></path><path d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0" fill="#a259ff"></path><path d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0" fill="#f24e1e"></path><path d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0" fill="#ff7262"></path><path d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0" fill="#1abcfe"></path></svg>
              </span>
            </button>
            <button className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img className="w-50 h-50 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ4qe-TiNdb7kONl0a1C3a1R3H9TPWKSJeGg&s" alt="js" />
              </span>
            </button>

            <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img className="w-50 h-50 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" alt="css" />
              </span>
            </button>

            <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M2.001 90.458h4.108V74.235l6.36 14.143c.75 1.712 1.777 2.317 3.792 2.317s3.003-.605 3.753-2.317l6.36-14.143v16.223h4.108V74.262c0-1.58-.632-2.345-1.936-2.739-3.121-.974-5.215-.131-6.163 1.976l-6.241 13.958-6.043-13.959c-.909-2.106-3.042-2.949-6.163-1.976C2.632 71.917 2 72.681 2 74.261v16.197zm31.898-13.206h4.107v8.938c-.038.485.156 1.625 2.406 1.661 1.148.018 8.862 0 8.934 0V77.208h4.117c.019 0-.004 14.514-.004 14.574.022 3.58-4.441 4.357-6.499 4.417H33.988v-2.764c.022 0 12.963.003 12.995-.001 2.645-.279 2.332-1.593 2.331-2.035v-1.078h-8.731c-4.062-.037-6.65-1.81-6.683-3.85-.002-.187.089-9.129-.001-9.219z" fill="#00618A"></path><path d="M56.63 90.458h11.812c1.383 0 2.727-.289 3.793-.789 1.777-.816 2.646-1.922 2.646-3.372v-3.002c0-1.185-.987-2.292-2.923-3.028-1.027-.396-2.292-.605-3.517-.605h-4.978c-1.659 0-2.449-.5-2.646-1.606-.039-.132-.039-.237-.039-.369v-1.87c0-.105 0-.211.039-.342.197-.843.632-1.08 2.094-1.212l.395-.026h11.733v-2.738H63.504c-1.659 0-2.528.105-3.318.342-2.449.764-3.517 1.975-3.517 4.082v2.396c0 1.844 2.095 3.424 5.61 3.793.396.025.79.053 1.185.053h4.267c.158 0 .316 0 .435.025 1.304.105 1.856.343 2.252.816a.98.98 0 01.315.737v2.397c0 .289-.197.658-.592.974-.355.316-.948.527-1.738.58l-.435.026H56.63v2.738zm43.881-4.766c0 2.817 2.094 4.397 6.32 4.714.395.026.79.052 1.185.052h10.706V87.72h-10.784c-2.41 0-3.318-.606-3.318-2.055V71.497h-4.108v14.195zm-23.008.142v-9.765c0-2.48 1.742-3.985 5.186-4.46a7.8 7.8 0 011.108-.079h7.799c.396 0 .752.026 1.147.079 3.444.475 5.187 1.979 5.187 4.46v9.765c0 2.014-.74 3.09-2.445 3.792l4.048 3.653h-4.771l-3.274-2.956-3.296.209h-4.395a9.075 9.075 0 01-2.414-.343c-2.613-.712-3.88-2.085-3.88-4.355zm4.434-.237c0 .132.039.265.079.423.237 1.135 1.307 1.768 2.929 1.768h3.732l-3.428-3.095h4.771l2.989 2.7c.552-.295.914-.743 1.041-1.32.039-.132.039-.264.039-.396v-9.368c0-.105 0-.238-.039-.37-.238-1.056-1.307-1.662-2.89-1.662h-6.216c-1.82 0-3.008.792-3.008 2.032v9.288z" fill="#E48E00"></path><path d="M122.336 66.952c-2.525-.069-4.454.166-6.104.861-.469.198-1.216.203-1.292.79.257.271.297.674.502 1.006.394.637 1.059 1.491 1.652 1.938.647.489 1.315 1.013 2.011 1.437 1.235.754 2.615 1.184 3.806 1.938.701.446 1.397 1.006 2.082 1.509.339.247.565.634 1.006.789v-.071c-.231-.294-.291-.698-.503-1.006l-.934-.934c-.913-1.212-2.071-2.275-3.304-3.159-.982-.705-3.18-1.658-3.59-2.801l-.072-.071c.696-.079 1.512-.331 2.154-.503 1.08-.29 2.045-.215 3.16-.503l1.508-.432v-.286c-.563-.578-.966-1.344-1.58-1.867-1.607-1.369-3.363-2.737-5.17-3.879-1.002-.632-2.241-1.043-3.304-1.579-.356-.181-.984-.274-1.221-.575-.559-.711-.862-1.612-1.293-2.441a93.068 93.068 0 01-2.585-5.458c-.544-1.245-.9-2.473-1.579-3.59-3.261-5.361-6.771-8.597-12.208-11.777-1.157-.677-2.55-.943-4.021-1.292l-2.37-.144c-.481-.201-.983-.791-1.436-1.077-1.802-1.138-6.422-3.613-7.756-.358-.842 2.054 1.26 4.058 2.011 5.099.527.73 1.203 1.548 1.58 2.369.248.54.29 1.081.503 1.652.521 1.406.976 2.937 1.651 4.236.341.658.718 1.351 1.149 1.939.264.36.718.52.789 1.077-.443.62-.469 1.584-.718 2.369-1.122 3.539-.699 7.938.934 10.557.501.805 1.681 2.529 3.303 1.867 1.419-.578 1.103-2.369 1.509-3.95.092-.357.035-.621.215-.861v.072l1.293 2.585c.957 1.541 2.654 3.15 4.093 4.237.746.563 1.334 1.538 2.298 1.867v-.073h-.071c-.188-.291-.479-.411-.719-.646-.562-.551-1.187-1.235-1.651-1.867-1.309-1.776-2.465-3.721-3.519-5.745-.503-.966-.94-2.032-1.364-3.016-.164-.379-.162-.953-.502-1.148-.466.72-1.149 1.303-1.509 2.154-.574 1.36-.648 3.019-.861 4.739l-.144.071c-1.001-.241-1.352-1.271-1.724-2.154-.94-2.233-1.115-5.83-.287-8.401.214-.666 1.181-2.761.789-3.376-.187-.613-.804-.967-1.148-1.437a11.222 11.222 0 01-1.149-2.011c-.77-1.741-1.129-3.696-1.938-5.457-.388-.842-1.042-1.693-1.58-2.441-.595-.83-1.262-1.44-1.724-2.442-.164-.356-.387-.927-.144-1.293.077-.247.188-.35.432-.431.416-.321 1.576.107 2.01.287 1.152.479 2.113.934 3.089 1.58.468.311.941.911 1.508 1.077h.646c1.011.232 2.144.071 3.088.358 1.67.508 3.166 1.297 4.524 2.155 4.139 2.614 7.522 6.334 9.838 10.772.372.715.534 1.396.861 2.154.662 1.528 1.496 3.101 2.154 4.596.657 1.491 1.298 2.996 2.227 4.237.488.652 2.374 1.002 3.231 1.364.601.254 1.585.519 2.154.861 1.087.656 2.141 1.437 3.16 2.155.509.362 2.076 1.149 2.154 1.798zM90.237 39.593a5.124 5.124 0 00-1.293.144v.071h.072c.251.517.694.849 1.005 1.293l.719 1.508.071-.071c.445-.313.648-.814.646-1.58-.179-.188-.205-.423-.359-.646-.204-.3-.602-.468-.861-.719z" fill="#00618A"></path></svg>
              </span>
            </button>

            <button className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <img className="w-50 h-50 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQie0GN4itCX8jT0h7B7suy1Xb9zxhQqQWw&s" alt="java" />
              </span>
            </button>

            <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
              <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                <img
                  src="/Images/me-min (1).jpg"
                  alt="Web developer illustration"
                  className="w-50 h-50 md:w-50 md:h-50 rounded-full"
                />
              </div>
            </button>
          </div>
        </div>

      </section>

      {/* ----------------About-------------------------- */}
      <section className="flex flex-col md:flex-row items-center p-10 md:p-20 bg-white" id="about">
        {/* Left side: Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-pink-100 flex items-center justify-center">
            <img
              src="/Images/My_new_pic.jpg"
              alt="Web developer illustration"
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
        </div>

        {/* Right side: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h3 className="text-gray-500 uppercase tracking-wide text-lg md:text-xl">About Me</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Exploring My Tech Stack
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Discover the tools and languages that fuel my passion for web development. I am committed to creating innovative and user-friendly websites, leveraging a diverse skill set that includes HTML, CSS, JavaScript, React, and more. <br />
            <ul className="list-disc pl-5 mt-2">
              <li>Currently Exploring The <b>Salesforce</b> Field.</li>
              <li>Final year student of B.Tech in <b>Computer Science and Engineering</b> at Future Institute of Engineering and Management.</li>
              <li>Completed 12th grade at Ghasiara Vidyapith(H.S.)</li>
              <li>Completed 10th grade at Atul Krishna Roy Vidyayatan for girls(H.S.)</li>
            </ul>
          </p>

          <div className="mt-6 space-y-4">
            <p className="text-gray-500 font-medium">Let&apos;s Connect</p>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <a
                href="https://www.linkedin.com/in/priya-acharjee-ba4119228/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-pink-100 text-pink-800 px-4 py-2 rounded-full hover:bg-blue-200 transition"
              >
                <span className="mr-2">👤</span> Connect with me on LinkedIn
              </a>
              <a
                href="https://x.com/_priyaacharjee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-pink-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition"
              >
                <span className="mr-2">🔗</span> Follow me on Twitter
              </a>
            </div>
            <a href="https://drive.google.com/drive/u/0/folders/1PaQCLSNC2uAIEgchyQD4CSFJOLwcl0Y1">
              <button className="bg-pink-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 mt-8 transition">
                Priya Acharjee
              </button>
            </a>
          </div>
        </div>
      </section>


      {/* -----------------------Projects----------------------------- */}
      <section className="py-20 bg-blue-50" id="projects">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-pink-600 uppercase font-medium text-lg">Featured Projects</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
            My Web Development Journey
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg">
            Dive into my portfolio and explore the diverse web development projects I&apos;ve undertaken, from building custom websites to developing responsive web applications.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-20">
          {/* Project 1 */}
          <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
            <img
              src="/Images/FoodHome.png"
              alt="Project illustration 1"
              className="mb-6 rounded object-cover h-48 w-full"
            />
            <h3 className="text-xl font-semibold text-pink-800">Bon Appetite</h3>
            <p className="text-gray-500 font-medium mt-2">Online Food Delivery Website using MERN Stack</p>
            <p className="text-gray-600 mt-4 text-sm md:text-base">
              • Developed an Online Food delivery website where Users can log in and Sign Up on the website. They can choose their preferred restaurant and food, filter the foods and restaurants of their choice, and then add it to their cart and purchase their order.<br />
              • It also has an admin panel section where the admins can add and update new food, restaurants, delivery agents, and their addresses.<br />
              • It also has a panel for Delivery agents, who can login themselves and see their assigned orders.
            </p>
            <a href="https://bonappetiteonline.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="mt-6 bg-pink-800 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full transition">
                View Project
              </button>
            </a>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
            <img
              src="/Images/weather.png"
              alt="Project illustration 2"
              className="mb-6 rounded object-cover h-48 w-full" 
            />
            <h3 className="text-xl font-semibold text-pink-800">Weathering</h3>
            <p className="text-gray-500 font-medium mt-2">A live Weather updating website</p>
            <p className="text-gray-600 mt-4 text-sm md:text-base">
              • Developed an Online weather website where Users can see and search different cities to check live weather updates.
            </p>
            <a href="https://weatheringonline.vercel.app/">
              <button className="mt-6 bg-pink-800 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full transition">
                View Project
              </button>
            </a>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
            <img
              src="/Images/eventek.png"
              alt="Project illustration 3"
              className="mb-6 rounded object-cover h-48 w-full" 
            />
            <h3 className="text-xl font-semibold text-pink-800">Eventek</h3>
            <p className="text-gray-500 font-medium mt-2">Online Event Management Website</p>
            <p className="text-gray-600 mt-4 text-sm md:text-base">
              • Developed an Online Event management website where Users can Signup and Login to create events and attend events.<br />
              • We have developed 3 kinds of event handling - <li>In-Person Events</li> <li>Virtual Events</li> <li>Hybrid Events</li>.<br />
              • We have a dedicated panel where users can track the events they have registered or created.<br />
              <span className="text-gray-400">.....it is on the way more to come</span>
            </p>
            {/* <a href="https://weatheringonline.vercel.app/">
          <button className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700">
              View Project
          </button>
      </a> */}
          </div>
        </div>
      </section>

      {/* -----------------------Certifications----------------------------- */}
      <div className="bg-gray-100 min-h-screen" id="certifications">
        <section className="text-center py-12">
          <h2 className="text-5xl font-bold text-pink-700" style={{ fontFamily: 'Dancing Script, cursive' }}>My Certifications</h2>
          <h1 className="text-4xl font-bold mt-2">Certifications and Accolades</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Alongside my hands-on web development experience, I&apos;ve earned a range of industry-recognized certifications
            that validate my technical expertise and commitment to continuous learning.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="bg-pink-500 rounded-md p-2 mx-auto">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="m-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">{certificate.title}</h3>
              <p className="text-gray-600 mt-2">
                Issued by <span className="font-semibold">{certificate.issuer}</span>, demonstrating my proficiency in{" "}
                <span className="font-semibold">{certificate.focus}</span>.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href={certificate.pdfLink} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-blue-700">
                  View
                </a>
                <a
                  href={certificate.pdfLink}
                  download
                  className="text-white bg-pink-500 hover:bg-blue-700 px-4 py-2 rounded"
                >
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className="text-center py-12 mt-12 bg-blue-100">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <h1 className="text-4xl font-bold mt-2" style={{ fontFamily: 'Dancing Script, cursive' }}>Get in Touch</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
            I welcome the opportunity to discuss your web development needs and explore how I can contribute to the
            success of your project. Feel free to reach out to me using the contact&apos;s below.
          </p>
          <div className="mt-6 max-w-md mx-auto">
            <input
              type="text"
              ref={inputRef}
              placeholder="Send a Message"
              className="border border-gray-300 rounded-l px-4 py-2 w-3/4 focus:outline-none"
            />
            <button onClick={handleSubmit} className="bg-pink-500 hover:bg-blue-700 text-white px-4 py-2 rounded-r"id="input">
              Submit
            </button>
          </div>
        </section>
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}


