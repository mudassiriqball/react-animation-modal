import "../scss/index.scss";
import { CSSTransition } from "react-transition-group";
import { AnimationModalProps } from "../index";
import { useEffect, useState } from "react";
import React from "react";

export const AnimationModal = ({
   children,
   visible = false,
   onHide,
   onOverlayClick,
   animation = "fade_in",
   closeIcon,
   closeOnOverlayClick = true,
   size = "md",
   overlayClassName = "",
   contentClassName = "",
   closeClassName = ""
}: AnimationModalProps) => {
   // local state
   const [showOverlay, setShowOverlay] = useState(false);
   const [showContent, setShowContent] = useState(false);
   const isSizeValue = size?.includes("px") || size?.includes("%");

   // useEffects
   useEffect(() => {
      if (visible) {
         setTimeout(() => {
            setShowOverlay(true);
         }, 1);
      } else {
         setTimeout(() => {
            setShowOverlay(false);
         }, 1);
      };
   }, [visible]);
   useEffect(() => {
      if (showOverlay) {
         setTimeout(() => {
            setShowContent(true);
         }, 1);
      } else {
         setTimeout(() => {
            setShowContent(false);
         }, 1);
      }
   }, [showOverlay]);
   useEffect(() => {
      if (!showContent) {
         setShowOverlay(false);
         setTimeout(() => {
            onHide?.();
         }, 501);
      };
   }, [showContent]);

   // return
   if (!visible) return null;
   return (
      <div className="animated-modal">
         <CSSTransition
            in={showOverlay}
            timeout={500}
            classNames="animation-modal-overlay"
         >
            <div
               className={`modal-overlay ${overlayClassName}`}
               onClick={(e) => {
                  closeOnOverlayClick && setShowContent(false);
                  onOverlayClick?.(e);
               }}
            />
         </CSSTransition>
         <CSSTransition
            in={showContent}
            timeout={450}
            classNames={animation}
         >
            <div style={{ ...(isSizeValue ? { width: size } : {}) }} className={`modal-body ${!isSizeValue ? size : ''} ${contentClassName}`}>
               <div className={`icon ${closeClassName}`} onClick={() => setShowContent(false)} >
                  {closeIcon || <CloseSvg />}
               </div>
               {size === 'fullScreen' ?
                  <div className="fullScreenWrapper">
                     {children}
                  </div>
                  :
                  children
               }
            </div>
         </CSSTransition>
      </div>
   );
};

const CloseSvg = (props: any) => (
   <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000"></path></g></svg>
);