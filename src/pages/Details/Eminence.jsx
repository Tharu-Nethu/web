import React from 'react';
import Header2 from '../../components/Header/Header2';

const Eminence = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
            <Header2/>

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 0,
          paddingTop: '56.25%',
          paddingBottom: 0,
          boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
          marginTop: '3.6em',
          marginBottom: '0.9em',
          overflow: 'hidden',
          borderRadius: '8px',
          willChange: 'transform'
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            border: 'none',
            padding: 0,
            margin: 0
          }}
          src="https://www.canva.com/design/DAGC9o2VuRM/2P_3lvJ-LdNx2pnYfmodtQ/view?embed"
          allowFullScreen
          allow="fullscreen"
          title="Canva Embedded PDF"
        ></iframe>
      </div>
      <a
        href="https://www.canva.com/design/DAGC9o2VuRM/2P_3lvJ-LdNx2pnYfmodtQ/view?utm_content=DAGC9o2VuRM&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: '#0073e6',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        Copy of Proposal Booklet - Eminence 4.0
      </a>
      {/* <div style={{ fontSize: '14px', color: '#666' }}>by theekshana wanniarachchi</div> */}
    </div>
  );
};

export default Eminence;
