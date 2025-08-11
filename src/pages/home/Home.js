import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FormattedMessage, useIntl } from "react-intl";
import { Helmet } from "react-helmet-async";

import { Button } from "../../components/button";
import { ListItem, OrderableList } from "../../components/list";
import { Header, Main } from "../../components/page";
import Logo from "../../components/logo";
import { getAllPoints } from "../../utils/points";
import { useTimezone } from "../../utils/useTimezone";
import { setArmy } from "../../state/army";
import { setItems } from "../../state/items";
import owb from "../../assets/army-icons/owb.svg";
import theEmpire from "../../assets/army-icons/the-empire.svg";
import dwarfs from "../../assets/army-icons/dwarfs.svg";
import greenskins from "../../assets/army-icons/greenskins.svg";
import beastmen from "../../assets/army-icons/beastmen.svg";
import chaosDeamons from "../../assets/army-icons/chaos-deamons.svg";
import chaosWarriors from "../../assets/army-icons/chaos-warriors.svg";
import darkElves from "../../assets/army-icons/dark-elves.svg";
import highElves from "../../assets/army-icons/high-elves.svg";
import lizardmen from "../../assets/army-icons/lizardmen.svg";
import ogres from "../../assets/army-icons/ogres.svg";
import skaven from "../../assets/army-icons/skaven.svg";
import tombKings from "../../assets/army-icons/tomb-kings.svg";
import vampireCounts from "../../assets/army-icons/vampire-counts.svg";
import woodElves from "../../assets/army-icons/wood-elves.svg";
import chaosDwarfs from "../../assets/army-icons/chaos-dwarfs.svg";
import bretonnia from "../../assets/army-icons/bretonnia.svg";
import cathay from "../../assets/army-icons/cathay.svg";

import { swap } from "../../utils/collection";
import { useLanguage } from "../../utils/useLanguage";
import { setLists } from "../../state/lists";
import { advertisements } from "../../config/advertisements";

import "./Home.css";

const armyIconMap = {
  "the-empire": theEmpire,
  dwarfs: dwarfs,
  greenskins: greenskins,
  "empire-of-man": theEmpire,
  "orc-and-goblin-tribes": greenskins,
  "dwarfen-mountain-holds": dwarfs,
  "warriors-of-chaos": chaosWarriors,
  "kingdom-of-bretonnia": bretonnia,
  "beastmen-brayherds": beastmen,
  "wood-elf-realms": woodElves,
  "tomb-kings-of-khemri": tombKings,
  "high-elf-realms": highElves,
  "dark-elves": darkElves,
  skaven: skaven,
  "vampire-counts": vampireCounts,
  "daemons-of-chaos": chaosDeamons,
  "ogre-kingdoms": ogres,
  lizardmen: lizardmen,
  "chaos-dwarfs": chaosDwarfs,
  "grand-cathay": cathay,
};

export const Home = ({ isMobile }) => {
  const MainComponent = isMobile ? Main : Fragment;
  const lists = useSelector((state) => state.lists);
  const location = useLocation();
  const dispatch = useDispatch();
  const resetState = () => {
    dispatch(setArmy(null));
    dispatch(setItems(null));
  };
  const handleListMoved = ({ sourceIndex, destinationIndex }) => {
    const newLists = swap(lists, sourceIndex, destinationIndex);
    localStorage.setItem("owb.lists", JSON.stringify(newLists));
    return dispatch(setLists(newLists));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>
          Old World Builder - Army builder for Warhammer: The Old World
        </title>
        <link rel="canonical" href="https://old-world-builder.com/" />
      </Helmet>

      {isMobile && <Header headline="Old World Builder" hasMainNavigation />}
      <MainComponent>
        {!lists.length && (
          <>
            <div className="home__logo-container">
              <Logo size="large" className="home__logo" />
            </div>
            <i className="home__empty">
              <FormattedMessage id="home.empty" />
            </i>
          </>
        )}
        <OrderableList id="armies" onMoved={handleListMoved}>
          {lists.map(
            ({ id, name, description, points, game, army, ...list }, index) => (
              <ListItem
                key={index}
                to={`/editor/${id}`}
                active={location.pathname.includes(id)}
                onClick={resetState}
              >
                <span className="home__list-item">
                  <h2 className="home__headline">{name}</h2>
                  {description && (
                    <p className="home__description">{description}</p>
                  )}
                  <p className="home__points">
                    {getAllPoints({
                      ...list,
                      points,
                    })}{" "}
                    / {points} <FormattedMessage id="app.points" />
                  </p>
                </span>
                <div className="home__info">
                  <img
                    height="40"
                    width="40"
                    src={armyIconMap[army] || owb}
                    alt=""
                  />
                </div>
              </ListItem>
            )
          )}
        </OrderableList>
        <Button
          centered
          to="/new"
          icon="new-list"
          spaceTop
          onClick={resetState}
          size="large"
        >
          <FormattedMessage id="home.newList" />
        </Button>
        <Button
          centered
          to="/import"
          type="text"
          icon="import"
          color="dark"
          spaceTop
          onClick={resetState}
        >
          <FormattedMessage id="home.import" />
        </Button>

        <hr />

        <p>
          <b>
            <i>
              <FormattedMessage id="home.sponsored" />
            </i>
          </b>
        </p>

        {/* Espacios Publicitarios Dinámicos */}
        {advertisements.map((ad) => (
          ad.active && (
            <div key={ad.id} className="home__advertisement">
              <h3 className="home__ad-title">{ad.title}</h3>
              <p className="home__ad-description">{ad.description}</p>
              {ad.image ? (
                <a
                  href={ad.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home__ad-banner"
                >
                  <img
                    src={ad.image}
                    alt={ad.title}
                    className="home__ad-image"
                    loading="lazy"
                  />
                </a>
              ) : (
                <div className="home__ad-placeholder">
                  {ad.placeholder}
                </div>
              )}
            </div>
          )
        ))}
      </MainComponent>
    </>
  );
};
