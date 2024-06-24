import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import Section from '../../components/Section/Section'
import styles from "./HomePage.module.css"
import { fetchFilters } from '../../api/api'

function HomePage(props){
    const {data}= useOutletContext();
    const {topAlbums,newAlbums,songs}=data;

return<>
<Hero/>
<div className={styles.wrapper}>
    <Section title="Top Album" data={topAlbums} type="album"/>
    <Section title="New Album" data={newAlbums} type="album"/>
   <Section title="Songs" data={songs} filterSource={fetchFilters} type="songs"/>

</div>
</>
}
export default HomePage