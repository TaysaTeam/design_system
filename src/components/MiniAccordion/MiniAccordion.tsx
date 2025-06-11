import React, { useRef, useState } from "react";
import styles from "./_miniAccordion.module.scss";
import { Icon } from "../Icon";

type MiniAccordionProps = {
  title: string;
  desc: string;
  isOpen: boolean;
  onToggle: () => void;
};

export const MiniAccordion = ({
  title,
  desc,
  isOpen,
  onToggle,
}: MiniAccordionProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  React.useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`${styles.accordion} ${isOpen ? styles.active : ""}`}
      onClick={onToggle}
    >
      <Icon
        color="var(--primary-text-02)"
        name="shortCurvedLine"
        w={24}
        h={24}
        className={styles.shortCurveIcon}
      />
      <Icon
        color="var(--primary-text-02)"
        name="longCurvedLine"
        w={24}
        h={24}
        className={styles.LongCurveIcon}
      />
      <div className={styles.accordionContent}>
        <Icon
          color="var(--primary-text-02)"
          name={isOpen ? "arrowUp" : "arrowDown"}
          w={24}
          h={24}
        />
        <div
          className={`${styles.title} h6-xl-600 ${isOpen ? "h6-xl-700" : ""}`}
        >
          <h3>{title}</h3>
        </div>
      </div>
      <div
        className={styles.accordionContentWrapper}
        style={{ height: `${contentHeight}px` }}
        ref={contentRef}
      >
        <div className={`${styles.desc} body3-sm-600`}>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
