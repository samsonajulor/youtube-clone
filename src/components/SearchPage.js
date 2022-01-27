import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

import './SearchPage.css'

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>

      <hr />

      <ChannelRow
        image='https://scontent-cpt1-1.xx.fbcdn.net/v/t1.6435-9/127929844_192909205774620_4852570612652802182_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHzoiPboR1R3cVDHmZA5Bdbw52vDjWhjlTDna8ONaGOVH2G6lM8WdjU-8LVh4MTzwar5p72xiBhQxZhsorFEOnw&_nc_ohc=40QHxjZz3qAAX90Qh8h&_nc_ht=scontent-cpt1-1.xx&oh=00_AT-i2dOk5GKmm2BiKUn42RX4pdfJfGlzSMXrRThcUpP_QA&oe=62190A3F'
        channel='Samson Ajulor'
        verified
        subs='9k'
        noOfVideos={79}
        description='A very cool developer'
        channelImage='https://scontent-cpt1-1.xx.fbcdn.net/v/t1.6435-9/127929844_192909205774620_4852570612652802182_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHzoiPboR1R3cVDHmZA5Bdbw52vDjWhjlTDna8ONaGOVH2G6lM8WdjU-8LVh4MTzwar5p72xiBhQxZhsorFEOnw&_nc_ohc=40QHxjZz3qAAX90Qh8h&_nc_ht=scontent-cpt1-1.xx&oh=00_AT-i2dOk5GKmm2BiKUn42RX4pdfJfGlzSMXrRThcUpP_QA&oe=62190A3F'
      />

      <hr />

      <VideoRow
        image='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dyYXBoaWNzLWNhcmQtdXBkYXRlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19'
        views='2k'
        subs='9k'
        description='Never let your guard down.'
        timestamp
        channel='Samson Ajulor'
        title='This data is static'
      />
      <VideoRow
        image='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dyYXBoaWNzLWNhcmQtdXBkYXRlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19'
        views='2k'
        subs='9k'
        description='Never let your guard down.'
        timestamp
        channel='Samson Ajulor'
        title='We will soon make it dynamic'
      />
      <VideoRow
        image='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dyYXBoaWNzLWNhcmQtdXBkYXRlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19'
        views='2k'
        subs='9k'
        description='Never let your guard down.'
        timestamp
        channel='Samson Ajulor'
        title='Reactified & Renewed'
      />
      <VideoRow
        image='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dyYXBoaWNzLWNhcmQtdXBkYXRlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19'
        views='2k'
        subs='9k'
        description='Never let your guard down.'
        timestamp
        channel='Samson Ajulor'
        title='Always stay tuned'
      />
      <VideoRow
        image='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dyYXBoaWNzLWNhcmQtdXBkYXRlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19'
        views='2k'
        subs='9k'
        description='Never let your guard down.'
        timestamp
        channel='Samson Ajulor'
        title='Never ever give up'
      />
      <VideoRow
        image='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dyYXBoaWNzLWNhcmQtdXBkYXRlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19'
        views='2k'
        subs='9k'
        description='Never let your guard down.'
        timestamp
        channel='Samson Ajulor'
        title='Be diligent'
      />
      <VideoRow
        image='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dyYXBoaWNzLWNhcmQtdXBkYXRlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19'
        views='2k'
        subs='9k'
        description='Never let your guard down.'
        timestamp
        channel='Samson Ajulor'
        title='Raise up your head'
      />
      <VideoRow
        image='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dyYXBoaWNzLWNhcmQtdXBkYXRlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19'
        views='2k'
        subs='9k'
        description='Never let your guard down.'
        timestamp
        channel='Samson Ajulor'
        title='Run and never stop'
      />
      <VideoRow
        image='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dyYXBoaWNzLWNhcmQtdXBkYXRlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19'
        views='2k'
        subs='9k'
        description='Never let your guard down.'
        timestamp
        channel='Samson Ajulor'
        title='We can change things for life'
      />
      <VideoRow
        image='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dyYXBoaWNzLWNhcmQtdXBkYXRlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19'
        views='2k'
        subs='9k'
        description='Never let your guard down.'
        timestamp
        channel='Samson Ajulor'
        title='This is awesome'
      />
      <VideoRow
        image='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dyYXBoaWNzLWNhcmQtdXBkYXRlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19'
        views='2k'
        subs='9k'
        description='Never let your guard down.'
        timestamp
        channel='Samson Ajulor'
        title='I have been scammed'
      />
      <VideoRow
        image='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dyYXBoaWNzLWNhcmQtdXBkYXRlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19'
        views='2k'
        subs='9k'
        description='Never let your guard down.'
        timestamp
        channel='Samson Ajulor'
        title='I cannot believe this'
      />
      <VideoRow
        image='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dyYXBoaWNzLWNhcmQtdXBkYXRlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19'
        views='2k'
        subs='9k'
        description='Never let your guard down.'
        timestamp
        channel='Samson Ajulor'
        title='JS is awesome'
      />
      <VideoRow
        image='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dyYXBoaWNzLWNhcmQtdXBkYXRlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19'
        views='2k'
        subs='9k'
        description='Never let your guard down.'
        timestamp
        channel='Samson Ajulor'
        title='Listen to new music.'
      />
    </div>
  )
}

export default SearchPage;
