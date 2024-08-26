import React from "react";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { Modal } from "flowbite-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const FloorPlan = ({ image, points }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [pointSelected, setPointSelected] = React.useState(null);

  //   const downloadImage = () => {
  //     // download the imagen selected of the point
  //     const image = new Image();
  //     image.src = pointSelected.image;
  //     const url = image.src.replace(
  //       /^data:image\/[^;]+/,
  //       "data:application/octet-stream"
  //     );
  //     window.open(url);
  //   };

  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
      <div className="flex justify-center gap-2 pb-4">
        <button
          className="h-8 w-8 p-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 hover:scale-105 transform transition-transform duration-200 ease-in-out"
          onClick={() => zoomIn()}
        >
          +
        </button>
        <button
          className="h-8 w-8 p-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 hover:scale-105 transform transition-transform duration-200 ease-in-out"
          onClick={() => zoomOut()}
        >
          -
        </button>
        <button
          className="h-8 w-fit p-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 hover:scale-105 transform transition-transform duration-200 ease-in-out"
          onClick={() => resetTransform()}
        >
          100%
        </button>
      </div>
    );
  };

  return (
    <>
      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <Controls />
            <TransformComponent>
              <div className="relative flex items-center justify-center">
                <LazyLoadImage
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  src={image}
                  alt="Floor Plan"
                  className="w-full h-auto max-h-[80dvh]"
                />
                {points.map((point, index) => (
                  <div
                    key={index}
                    className="absolute bg-yellow-300 text-white rounded-full text-xs flex items-center justify-center"
                    style={{
                      top: point.y,
                      left: point.x,
                      transform: "translate(-50%, -50%)",
                      height: "5%",
                      width: "2.2%",
                    }}
                    onClick={() => {
                      setPointSelected(point);
                      setOpenModal(true);
                    }}
                  >
                    {point.id}
                  </div>
                ))}
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
      <Modal
        size={"4xl"}
        dismissible
        show={openModal}
        onClose={() => {
          setOpenModal(false);
          setPointSelected(null);
        }}
        className="w-full"
      >
        <Modal.Header>{pointSelected?.title}</Modal.Header>
        <Modal.Body className="w-full min-h-[70dvh]">
          <TransformWrapper smooth={true}>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <>
                <Controls />
                <TransformComponent>
                  <LazyLoadImage
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                    src={pointSelected?.image}
                    alt={pointSelected?.title}
                    className="w-full h-auto object-contain"
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </Modal.Body>
        {/* <Modal.Footer className="flex flex-col gap-2 items-start">
          <Button onClick={downloadImage} color="purple">
            Descargar imagen
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default FloorPlan;
