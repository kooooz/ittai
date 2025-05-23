interface LogoProps {
  color?: string
}

export default function Logo({ color = "#4F4F4F" }: LogoProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 467 113"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
    >
      <g fill={color}>
        <rect x="0" y="0.627" width="24.815" height="111.709" />
        <rect x="441.304" y="0.627" width="24.815" height="111.709" />
        <path d="M297.471,92.796l31.669,-92.788l2.268,0.774l22.994,0l2.291,-0.782l29.175,85.48l0.009,-0.027l9.434,26.839l-2.411,-0l0.007,0.021l-18.983,0l-0.031,0.011l-8.694,-25.473l-44.615,-0l-8.713,25.528l-0.024,-0.008l-18.852,-0l0.006,-0.017l-2.391,0l6.861,-19.558Zm30.449,-27.439l29.943,0l-14.972,-43.865l-14.971,43.865Z" />
        <path d="M109.849,22.114l-31.997,-0l-0,-21.332l31.997,0l0,-0.155l24.816,-0l-0,0.155l31.997,0l0,21.332l-31.997,-0l-0,90.221l-24.816,0l0,-90.221Z" />
        <path d="M220.524,22.114l-31.998,-0l0,-21.332l31.998,0l0,-0.155l24.816,-0l-0,0.155l31.997,0l0,21.332l-31.997,-0l-0,90.221l-24.816,0l0,-90.221Z" />
      </g>
    </svg>
  )
}
