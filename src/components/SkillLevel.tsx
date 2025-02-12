import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const SkillLevel = () => {
  const percentage = 80;

  return (
    
      <div className="p-2">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={12}
          styles={buildStyles({
            textColor: "#ffffff",
            pathColor: "rgba(0, 255, 255, 1)",
            trailColor: "rgba(128, 128, 128, 0.2)",
            strokeLinecap: "round"
          })}
        />
      </div>
  )
}

export default SkillLevel
