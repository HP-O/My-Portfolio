import React from "react";
import { Link } from "react-router-dom";
import "./home-page.css";
import LogoCarousel from "./LogoCarousel";

function HomePage() {
  return (
    <div className="container-home">
      <div className=" button-container">
        <button className="btn">
          <Link to="/aboutme">
            <p>About Me</p>
          </Link>
        </button>

        <button className="btn">
          <Link to="/resume">
            <p>Resume</p>
          </Link>
        </button>

        <button className="btn">
          <Link to="/projects">
            <p>Projects</p>
          </Link>
        </button>
      </div>
      <div className="text-container">
        <h1>Welcome To My Portofolio</h1>
        <h3>Hauwa Poloma-Obadan</h3>
        <p>Fullstack Developer </p>
        <p>Javascript</p>
        <p>React.js</p>
        <p>Node.js</p>
      </div>
      {/* <div className="logos-container">
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="221.807 90 440 621.061"
            enable-background="new 221.807 89.47 440 621.061"
          >
            <filter id="a" width="150%" height="150%" x="-5%" y="-5%">
              <feFlood
                flood-color="#000"
                result="floodFill"
                flood-opacity=".5"
              />
              <feComposite
                in="floodFill"
                in2="SourceAlpha"
                operator="in"
                result="coloredAlpha"
              />
              <feGaussianBlur
                in="coloredAlpha"
                result="blur"
                stdDeviation="8"
              />
              <feComposite
                in="blur"
                in2="SourceGraphic"
                operator="out"
                result="maskedOffsetBlur"
              />
              <feMerge>
                <feMergeNode in="maskedOffsetBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <g filter="url(#a)">
              <path
                fill="#e44d26"
                d="M261.849 660.647l-40.042-449.125h440l-40.086 449.054-180.184 49.954z"
              />
              <path
                fill="#f16529"
                d="M441.807 672.348l145.596-40.367 34.258-383.735H441.807z"
              />
              <path
                fill="#ebebeb"
                d="M441.807 414.82h-72.888l-5.035-56.406h77.923V303.33H303.683l1.32 14.778 13.538 151.794h123.266zM441.807 557.876l-.242.066-61.346-16.566-3.922-43.93h-55.294l7.718 86.489 112.834 31.323.252-.071z"
              />
              <path d="M262.745 89.47h27.992v27.656h25.606V89.47h27.993v83.75h-27.993v-28.044h-25.606v28.044h-27.99l-.002-83.75zM381.149 117.244h-24.642V89.47H433.8v27.774h-24.654v55.976H381.15v-55.976h-.001zM446.065 89.47h29.19l17.955 29.428 17.938-29.428h29.2v83.75h-27.882v-41.512l-19.259 29.778h-.481l-19.272-29.778v41.512h-27.39V89.47zM554.277 89.47h28v56.068h39.368v27.682h-67.368V89.47z" />
              <path
                fill="#fff"
                d="M441.617 414.82v55.082h67.83l-6.395 71.44-61.435 16.58v57.307l112.924-31.294.826-9.309 12.946-145.014 1.344-14.792h-14.842zM441.617 303.33v55.084H574.67l1.103-12.382 2.51-27.924 1.318-14.778z"
              />
            </g>
          </svg>
        </p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="81"
            viewBox="0 38 538.584 538.583"
          >
            <path d="M0 0h538.584v538.583H0V0z" fill="none" />
            <path
              d="M405.5 467.454L269.29 504.13l-136.212-36.676-31.432-340.525h335.29L405.5 467.454z"
              fill="#2062af"
            />
            <path
              d="M269.289 154.511v320.367l.308.084 110.229-29.682 25.443-290.769h-135.98z"
              fill="#3c9cd7"
            />
            <path d="M191.985 76.899V56.631h29.571V34.453h-51.749v62.684h51.749V76.899h-29.571zm82.766-20.268h20.674V34.453h-51.754v22.178c6.924 6.924 10.535 10.238 20.549 20.252-5.854 0-20.549.021-20.549.02v20.234h51.754V76.899l-20.674-20.268zm73.352 0h20.673V34.453H317.02v22.178c6.924 6.924 10.537 10.238 20.551 20.252-5.852 0-20.551.021-20.551.02v20.234h51.757V76.899l-20.674-20.268z" />
            <path
              d="M269.168 239.656l-97.49 40.602 3.233 40.199 94.257-40.301 100.265-42.868 4.157-41.122-104.422 43.49z"
              fill="#fff"
            />
            <linearGradient
              id="a"
              gradientUnits="userSpaceOnUse"
              x1="-825.508"
              y1="1338.301"
              x2="-825.508"
              y2="1419.102"
              gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
            >
              <stop offset=".387" stop-color="#d1d3d4" stop-opacity="0" />
              <stop offset="1" stop-color="#d1d3d4" />
            </linearGradient>
            <path
              d="M171.677 280.258l3.233 40.199 94.257-40.301v-40.5l-97.49 40.602z"
              fill="url(#a)"
            />
            <linearGradient
              id="b"
              gradientUnits="userSpaceOnUse"
              x1="-724.552"
              y1="1378.602"
              x2="-724.552"
              y2="1462.591"
              gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
            >
              <stop offset=".387" stop-color="#d1d3d4" stop-opacity="0" />
              <stop offset="1" stop-color="#d1d3d4" />
            </linearGradient>
            <path
              d="M373.59 196.167l-104.422 43.489v40.5l100.265-42.868 4.157-41.121z"
              fill="url(#b)"
            />
            <linearGradient
              id="c"
              gradientUnits="userSpaceOnUse"
              x1="-874.103"
              y1="1302.263"
              x2="-680.039"
              y2="1302.263"
              gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
            >
              <stop offset="0" stop-color="#e8e7e5" />
              <stop offset="1" stop-color="#fff" />
            </linearGradient>
            <path
              d="M171.827 280.258l3.234 40.199 144.625.461-3.235 53.598-47.59 13.398-45.748-11.551-2.772-33.268h-42.508l5.545 64.225 85.945 25.412 85.479-24.951 11.09-127.523H171.827z"
              fill="url(#c)"
            />
            <path
              d="M269.168 280.258h-97.49l3.233 40.199 94.257.301v-40.5zm0 107.528l-.462.129-45.742-11.551-2.772-33.268h-42.507l5.544 64.225 85.939 25.412v-44.947z"
              opacity=".05"
            />
            <linearGradient
              id="d"
              gradientUnits="userSpaceOnUse"
              x1="-883.032"
              y1="1442.031"
              x2="-672.341"
              y2="1442.031"
              gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
            >
              <stop offset="0" stop-color="#e8e7e5" />
              <stop offset="1" stop-color="#fff" />
            </linearGradient>
            <path
              d="M162.898 196.167H373.59l-4.157 41.122H167.98l-5.082-41.122z"
              fill="url(#d)"
            />
            <path
              d="M269.168 196.167h-106.27l5.082 41.122h101.188v-41.122z"
              opacity=".05"
            />
          </svg>
        </p>
        <svg
          width="55"
          height="90"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
        >
          <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
          <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
        </svg>
        <p>
          <svg
            width="67"
            height="90"
            viewBox="0 0 256 230"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              d="M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z"
              fill="#FFF"
            />
            <path
              d="M201.025 79.674a151.364 151.364 0 0 0-7.274-2.292 137.5 137.5 0 0 0 1.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065.29-50.535 17.233a151.136 151.136 0 0 0-5.626 5.163 137.573 137.573 0 0 0-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 0 0 1.67 7.484c-2.894.822-5.689 1.698-8.363 2.63-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 0 0 6.11 1.91 147.813 147.813 0 0 0-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 0 0 6.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-.39-1.973-.845-3.988-1.355-6.04 1.43-.422 2.833-.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z"
              fill="#53C1DE"
            />
            <path
              d="M195.406 142.328c-1.235.409-2.503.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368-1.883-1.62-3.78-3.35-5.682-5.18 6.367-6.964 12.73-15.06 18.94-24.05 10.924-.969 21.244-2.554 30.603-4.717.46 1.86.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847.596-7.128-4.11-10.09-19.98-6.049-41.265a138.507 138.507 0 0 1 1.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.863 118.863 0 0 1-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.276 139.276 0 0 1 7.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.908 118.908 0 0 1-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627.985-20.8 2.567-30.152 4.686a141.525 141.525 0 0 1-1.553-6.962zm97.467 24.067a306.982 306.982 0 0 0-6.871-11.3c7.21.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 0 0-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.245 284.245 0 0 0-26.706-.006c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 0 0-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 0 0-6.927 11.384zm7.133 57.683c-7.4-.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.494 283.494 0 0 0 6.406 11.692 285.27 285.27 0 0 0 7.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326.17 8.737.256 13.22.256 4.606 0 9.159-.103 13.64-.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.537 337.537 0 0 0 6.937-11.498 306.632 306.632 0 0 0 6.553-11.972zm-14.915 7.15a316.478 316.478 0 0 1-10.84 17.49c-6.704.479-13.632.726-20.692.726-7.031 0-13.871-.219-20.458-.646A273.798 273.798 0 0 1 96.72 133.28a271.334 271.334 0 0 1-9.64-18.206 273.864 273.864 0 0 1 9.611-18.216v.002a271.252 271.252 0 0 1 10.956-17.442c6.72-.508 13.61-.774 20.575-.774 6.996 0 13.895.268 20.613.78a290.704 290.704 0 0 1 10.887 17.383 316.418 316.418 0 0 1 9.741 18.13 290.806 290.806 0 0 1-9.709 18.29zm19.913-107.792c7.566 4.364 10.509 21.961 5.755 45.038a127.525 127.525 0 0 1-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 0 1 5.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z"
              fill="#FFF"
            />
            <path
              d="M128.221 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177"
              fill="#53C1DE"
            />
          </svg>
        </p>
        <p>
          <svg
            width="60"
            height="100"
            viewBox="0 0 512 145"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
          >
            <g fill="#83CD29">
              <path d="M471.05 51.611c-1.244 0-2.454.257-3.525.863l-33.888 19.57c-2.193 1.264-3.526 3.65-3.526 6.189v39.069c0 2.537 1.333 4.92 3.526 6.187l8.85 5.109c4.3 2.119 5.885 2.086 7.842 2.086 6.366 0 10.001-3.863 10.001-10.576V81.542c0-.545-.472-.935-1.007-.935h-4.245c-.544 0-1.007.39-1.007.935v38.566c0 2.975-3.1 5.968-8.13 3.453l-9.21-5.396c-.326-.177-.576-.49-.576-.863v-39.07c0-.37.247-.747.576-.935L470.547 57.8a.998.998 0 0 1 1.007 0l33.817 19.498c.322.194.576.553.576.936v39.069c0 .373-.188.755-.504.935l-33.889 19.498c-.29.173-.69.173-1.007 0l-8.706-5.18a.905.905 0 0 0-.863 0c-2.403 1.362-2.855 1.52-5.109 2.302-.555.194-1.398.495.288 1.44l11.368 6.69a6.995 6.995 0 0 0 3.526.936 6.949 6.949 0 0 0 3.525-.935l33.889-19.499c2.193-1.275 3.525-3.65 3.525-6.187v-39.07c0-2.538-1.332-4.92-3.525-6.187l-33.889-19.57c-1.062-.607-2.28-.864-3.525-.864z" />
              <path d="M480.116 79.528c-9.65 0-15.397 4.107-15.397 10.937 0 7.408 5.704 9.444 14.966 10.36 11.08 1.085 11.943 2.712 11.943 4.893 0 3.783-3.016 5.396-10.144 5.396-8.957 0-10.925-2.236-11.584-6.691-.078-.478-.447-.864-.936-.864h-4.389c-.54 0-1.007.466-1.007 1.008 0 5.703 3.102 12.447 17.916 12.447 10.723 0 16.908-4.209 16.908-11.584 0-7.31-4.996-9.273-15.398-10.648-10.51-1.391-11.512-2.072-11.512-4.533 0-2.032.85-4.75 8.634-4.75 6.954 0 9.524 1.5 10.577 6.189.092.44.48.791.935.791h4.39c.27 0 .532-.166.719-.36.184-.207.314-.44.288-.719-.68-8.074-6.064-11.872-16.909-11.872z" />
            </g>
            <path
              d="M271.821.383a2.181 2.181 0 0 0-1.08.287 2.18 2.18 0 0 0-1.079 1.871v55.042c0 .54-.251 1.024-.719 1.295a1.501 1.501 0 0 1-1.511 0l-8.994-5.18a4.31 4.31 0 0 0-4.317 0l-35.903 20.721c-1.342.775-2.158 2.264-2.158 3.814v41.443c0 1.548.817 2.966 2.158 3.741l35.903 20.722a4.3 4.3 0 0 0 4.317 0l35.903-20.722a4.308 4.308 0 0 0 2.159-3.741V16.356a4.386 4.386 0 0 0-2.23-3.814L272.9.598c-.335-.187-.707-.22-1.079-.215zM40.861 52.115c-.684.027-1.328.147-1.942.503L3.015 73.34a4.3 4.3 0 0 0-2.158 3.741L.929 132.7c0 .773.399 1.492 1.079 1.87a2.096 2.096 0 0 0 2.159 0l21.297-12.231c1.349-.802 2.23-2.196 2.23-3.742V92.623c0-1.55.815-2.972 2.159-3.742l9.065-5.252a4.251 4.251 0 0 1 2.159-.576c.74 0 1.5.185 2.158.576l9.066 5.252a4.296 4.296 0 0 1 2.159 3.742v25.973c0 1.546.89 2.95 2.23 3.742l21.297 12.232a2.096 2.096 0 0 0 2.159 0 2.164 2.164 0 0 0 1.08-1.871l.07-55.618a4.28 4.28 0 0 0-2.158-3.741L43.235 52.618c-.607-.356-1.253-.475-1.942-.503h-.432zm322.624.503c-.75 0-1.485.19-2.158.576l-35.903 20.722a4.306 4.306 0 0 0-2.159 3.741V119.1c0 1.559.878 2.971 2.23 3.742l35.616 20.29c1.315.75 2.921.807 4.245.07l21.585-12.015c.685-.38 1.148-1.09 1.151-1.87a2.126 2.126 0 0 0-1.079-1.871l-36.119-20.722c-.676-.386-1.151-1.167-1.151-1.943v-12.95c0-.775.48-1.485 1.151-1.871l11.224-6.476a2.155 2.155 0 0 1 2.159 0L375.5 89.96a2.152 2.152 0 0 1 1.08 1.87v10.217a2.15 2.15 0 0 0 1.079 1.87c.673.389 1.487.39 2.158 0L401.331 91.4a4.325 4.325 0 0 0 2.159-3.742v-10c0-1.545-.82-2.966-2.159-3.742l-35.687-20.722a4.279 4.279 0 0 0-2.159-.575zm-107.35 30.939c.188 0 .408.046.576.143l12.304 7.123c.334.193.576.55.576.935v14.246c0 .387-.24.743-.576.936l-12.304 7.123a1.088 1.088 0 0 1-1.079 0l-12.303-7.123c-.335-.194-.576-.549-.576-.936V91.758c0-.386.242-.74.576-.935l12.303-7.122a.948.948 0 0 1 .504-.143v-.001z"
              fill="#404137"
            />
            <path
              d="M148.714 52.402c-.748 0-1.488.19-2.158.576l-35.903 20.65c-1.343.773-2.159 2.265-2.159 3.813v41.443c0 1.55.817 2.966 2.159 3.742l35.903 20.721a4.297 4.297 0 0 0 4.317 0l35.903-20.721a4.308 4.308 0 0 0 2.158-3.742V77.441c0-1.55-.816-3.04-2.158-3.813l-35.903-20.65a4.297 4.297 0 0 0-2.159-.576zM363.413 89.385c-.143 0-.302 0-.431.072l-6.907 4.029a.84.84 0 0 0-.432.72v7.914c0 .298.172.571.432.72l6.907 3.957c.259.15.535.15.791 0l6.907-3.958a.846.846 0 0 0 .432-.719v-7.915a.846.846 0 0 0-.432-.719l-6.907-4.03c-.128-.075-.216-.07-.36-.07z"
              fill="#83CD29"
            />
          </svg>
        </p>
        <p></p>
        //{" "}
      </div> */}
      <div>
        <LogoCarousel />
      </div>
    </div>
  );
}

export default HomePage;
