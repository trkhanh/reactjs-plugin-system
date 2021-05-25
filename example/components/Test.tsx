import * as React from 'react';
import { usePluginStore } from '../../src';

const Test = (props: any) => {
  const pluginStore: any = usePluginStore();
  let Renderer = pluginStore.executeFunction('Renderer.getRendererComponent');

  return (
    <>
      <h1>Working</h1>{' '}
      <button
        onClick={() => {
          pluginStore.executeFunction('ClickMe.sendAlert', 'Alert!!!!');
        }}
      >
        Send Alert
      </button>
      <Renderer placement={'top'} />
    </>
  );
};

export default Test;
