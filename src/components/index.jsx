import React, { useEffect, useState, useMemo } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { makeStyles } from "@mui/styles";

// CSS STYLES
const useStyles = makeStyles({
  particles: {
    position: "absolute",
    opacity: "0.3",
  },
});
const Home = () => {
  const classes = useStyles();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      particles: {
        number: {
          value: 45,
          density: {
            enable: true,
            area: 900,
          },
        },
        shape: {
          type: "circle",
          stroke: {
            width: 1,
            color: "#557A95",
          },
        },
        size: {
          value: { min: 0.1, max: 5 },
          animation: {
            enable: true,
            speed: 6,
            sync: true,
          },
        },
        opacity: {
          value: { min: 0.1, max: 1 },
          animation: {
            enable: true,
            speed: 1,
            sync: true,
          },
        },
      },
    }),
    []
  );

  return (
    <>
      <Navbar />
      <Header />
      {init && <Particles className={classes.particles} options={options} />}
    </>
  );
};

export default Home;
