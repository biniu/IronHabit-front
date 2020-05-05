import React, {
  Fragment,
  useState,
} from 'react';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

// Import nav bars
import {GlobalNavBar} from '../../General/NavBars/GlobalNavBar';
import {useDataApi} from '../../General/RESTAPI';
import {QuestQuickAdd} from './QuestQuickAdd';
import {QuestList} from './QuestList';
import {QuestMenu} from './QuestMenu';

import './Quest.css';

const URI_QUEST_LIST = 'http://localhost:3001/quest/';

/**
 * render main page with Quests
 * @return {Quest site}
 * @constructor
 */
export function QuestsMainSite() {
  const [query, setQuery] = useState('redux');
  const [{data, isLoading, isError}, doFetch] = useDataApi(
      URI_QUEST_LIST,
      {hits: []},
  );

  return (
    <Container fluid>
      <Row>
        <Col>
          <GlobalNavBar />
        </Col>
      </Row>

      <Row>
        <Col lg={2}>
          <QuestMenu/>
        </Col>
        <Col lg={8}>
          <Row>
            <QuestQuickAdd/>
          </Row>
          <Row>
            <Col lg={12}>
              <Fragment>
                {/* <form onSubmit={(event) => {*/}
                {/* doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);*/}
                {/* event.preventDefault();*/}
                {/* }}>*/}
                {/* <input*/}
                {/*   type="text"*/}
                {/*   value={query}*/}
                {/*   onChange={(event) => setQuery(event.target.value)}*/}
                {/* />*/}
                {/* <button type="submit">Search</button>*/}
                {/* </form>*/}
                {isError && <div>Something went wrong ...</div>}
                {isLoading ? (
                  <div>Loading ...</div>
                ) : (
                  <QuestList questList={data}/>
                )}
              </Fragment>
            </Col>
          </Row>
        </Col>
        <Col lg={2}> </Col>
      </Row>

    </Container>
  );
}

export default QuestsMainSite;
