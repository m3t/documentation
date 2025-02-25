import * as React from "react"
import { SimpleImg } from "react-simple-img"
import { AnimateGroup } from "react-simple-animate"
import formik from "../images/formik.min.png"
import hookFrom from "../images/hookform.min.png"
import reduxForm from "../images/reduxform.min.png"
import home from "../data/home"
import * as containerStyles from "../styles/container.module.css"
import * as typographyStyles from "../styles/typography.module.css"
import * as styles from "./CodePerfCompareSection.module.css"

function CodePerfCompareSection({
  isPlayRender,
  currentLanguage,
}: {
  isPlayRender: boolean
  currentLanguage: string
}) {
  return (
    <AnimateGroup play={isPlayRender}>
      <div className={containerStyles.centerContent}>
        <h1 className={typographyStyles.h1}>
          {home.mount[currentLanguage].title}
        </h1>

        {home.mount[currentLanguage].description}
      </div>

      <h2
        className={typographyStyles.title}
        style={{
          marginTop: 40,
        }}
      >
        React Hook Form
      </h2>
      <div className={styles.imgSection}>
        <ul>
          <li>{home.mount[currentLanguage].totalMount}: 1</li>
          <li>{home.mount[currentLanguage].totalChange}: 1</li>
          <li>
            {home.mount[currentLanguage].totalTime}:{" "}
            <b className={typographyStyles.note}>1800ms</b>
          </li>
        </ul>
        <SimpleImg
          src={hookFrom}
          placeholder={false}
          height={163}
          alt="React Hook Form performance"
        />
      </div>

      <h2 className={typographyStyles.title}>Others</h2>
      <div className={styles.imgSection}>
        <ul>
          <li>{home.mount[currentLanguage].totalMount}: 6</li>
          <li>{home.mount[currentLanguage].totalChange}: 1</li>
          <li>
            {home.mount[currentLanguage].totalTime}:{" "}
            <b className={typographyStyles.note}>2070ms</b>
          </li>
        </ul>
        <SimpleImg
          height={230}
          src={formik}
          placeholder={false}
          alt="Formik performance"
        />
      </div>

      <div className={styles.imgSection}>
        <ul>
          <li>{home.mount[currentLanguage].totalMount}: 17</li>
          <li>{home.mount[currentLanguage].totalChange}: 2</li>
          <li>
            {home.mount[currentLanguage].totalTime}:{" "}
            <b className={typographyStyles.note}>2380ms</b>
          </li>
        </ul>
        <SimpleImg
          height={365}
          src={reduxForm}
          placeholder={false}
          alt="Redux Form performance"
        />
      </div>
    </AnimateGroup>
  )
}

export default React.memo(CodePerfCompareSection)
