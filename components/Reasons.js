import React, { useState } from "react";
import styles from "../styles/Reasons.module.scss";
import Title from "./Title";
import LogoBlack from "../svgs/reasons-logo-black.svg";

import Reason from "./Reason";

const Reasons = ({ isDarkTheme }) => {
  return (
    <div className={`${styles.reasonsWrapper} ${isDarkTheme ? styles.dark : styles.light}`} id="adv">
      <div className={styles.reasonsContent}>
        <div className={styles.title}>
          <Title isDarkTheme={isDarkTheme} text="ПОЧЕМУ ВЫБИРАЮТ НАС?" mainTitle width={"746px"} left={"36px"}/>
        </div>
        <section className={styles.reasonsWrap}>
          <div className={styles.leftContent}>
            <Reason
              isDarkTheme={isDarkTheme}
              title={"Практический опыт"}
              text={
                "За 8 лет производства профеcсионального видеоконтента, мы реализовали более 560 проектов для 180 корпоративных клиентов. Полученный опыт открывает нам доступ к полному пониманию задач клиента и помогает построить производственный процесс максимально эффективно."
              }
            />
            <Reason
              isDarkTheme={isDarkTheme}
              title={"Работа в рамках бюджета"}
              text={
                "Заявляя и согласовывая бюджет, необходимый для производства конечного продукта, мы берем на себя обязательства, которые будут соблюдаться вплоть до завершения работ. Таким образом, клиенты застрахованы от внезапных дополнительных расходов."
              }
            />
            <Reason
              isDarkTheme={isDarkTheme}
              title={"Решение бизнес задач"}
              text={
                "Наша работа всегда начинается  с исследования и анализа бизнеса клиента, его потребностей при создании видео. Используя данную информацию, мы создаём ролики, которые решают любые задачи — повышение продаж и доверия, формирование имиджа, рассказ о бизнес-процессах, и многое другое."
              }
            />
          </div>
          {isDarkTheme ? (
            <div className={styles.playContentBlack}>
              <LogoBlack />
            </div>
          ) : (
            <div className={styles.playContentLight}>
              <img src="/png/playLight.webp" width={390} height={371}/>
            </div>
          )}

          <div className={styles.rightContent}>
            <Reason
              isDarkTheme={isDarkTheme}
              title={"Комплексное решение"}
              text={
                "В нашей студии работают профессионалы, обеспечивающие полный цикл видеопроизводства – от постановки задачи и написания сценария до саунд-дизайна и цвеоткоррекции финальной версии. Наши менеджеры проектов следят за тем, чтобы все работы были сделаны в согласованный срок."
              }
            />
            <Reason
              isDarkTheme={isDarkTheme}
              title={"Доверие крупных брендов"}
              text={
                "Успешный опыт сотрудничества с такими масштабными компаниями, как: Согаз, Сбербанк, Роснефть, X5 Group (Пятёрочка и Перекрёсток), Omron, Правительство Москвы, ООН, и многими другими."
              }
            />
            <Reason
              isDarkTheme={isDarkTheme}
              title={"Современные тенденции видео"}
              text={
                "При создании роликов мы всегда используем мировой опыт, отслеживаем новые тенденции в нашей отрасли. Мы применяем лучшие современные решения визуальной подачи. Это помогает нам создавать эксклюзивное видео для каждого нашего проекта."
              }
            />
          </div>
        </section>

       
      </div>
    </div>
  );
};

export default Reasons;
