import React,{useState} from 'react'
import { AnimatePresence } from "framer-motion";
import { MotionBox } from "./MotionBox";
import { Flex } from "./Flex";
import { Absolute } from "./Absolute";
import { wrap } from "@popmotion/popcorn";
import PropTypes from "prop-types"
import Arrow from "./styled/Arrow"
import Slider from "./styled/Slider"

const directionOffset = 50;

const variants = {
  enter: direction => ({
    x: direction < 0 ? -directionOffset : directionOffset,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: direction => ({
    zIndex: 0,
    x: direction < 0 ? -directionOffset : directionOffset,
    opacity: 0
  })
};



const ImageSlider = ({content}) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const i = wrap(0, content.length, page);


  const paginate = newDirection => {
    if (page + newDirection < content.length && page + newDirection >= 0) {
      setPage([page + newDirection, 0]);
    } else if (page + newDirection === content.length) {
      setPage([0, 0]);
    } else if (page + newDirection === -1) {
      setPage([content.length - 1, 0]);
    }
  };

  const Arrows=()=>{
       return <Flex
       position="relative"
       alignItems="center"
       justifyContent="space-between"
       width={300}
       top={[0, null, -64]}
       style={{ zIndex: 1, float: "right" }}
     >
       <Arrow onClick={() => paginate(-1)}>{"<"}</Arrow>
       <Arrow onClick={() => paginate(1)}>{">"}</Arrow>
     </Flex>
  }

  const PROPSmoionBox={
     position:"relative",
     key:page,
     custom:direction,
     variants:variants,
     initial:"enter",
     animate:"center",
     exit:"exit",
     transition:{
       x: {type: "spring",stiffness: 800,damping: 100,duration: 0.1},
       opacity: { duration: 0.6 }
     },
     drag:"x",
     dragConstraints:{ left: 0, right: 0 },
     dragElastic:1,
     onDragEnd:(e, { offset, velocity }) => {
       const swipe = swipePower(offset.x, velocity.x);
       if (swipe < swipeConfidenceThreshold) {
         paginate(-1);
       } else if (swipe > -swipeConfidenceThreshold) {
         paginate(1);
       }
     }
  }
  return (
    <Flex 
    alignItems="center"
    flexDirection="column"
    position="relative"
    height='500px'
    >
      <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
        <MotionBox {...PROPSmoionBox}  >
          <Slider>
             <img className="slider-image" src={content[i].img}  role="imageSlider" width={250} />
             <p  style={{width:250,lineHeight:1}} >{content[i].title}</p>
          </Slider>
        </MotionBox>
      </AnimatePresence>
      <Absolute top="50%" zIndex={99} left="50%" style={{
       transform: `translateX(-50%)` 
      }}   >
          <Arrows />
      </Absolute>
    
    </Flex>
  );
}



const swipeConfidenceThreshold = 100;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

ImageSlider.propTypes = {
  content: PropTypes.array,
}

export default ImageSlider
