/* Models
SONG
title:string,
artist:string,
album:string,
plays:integer

ARTIST
name:string,
albums:integer,
songs:integer

ALBUM
name:string,
tracks:integer,
release:string
*/

// sequelize model:create --name Song --attributes title:string,artist:string,album:string,plays:integer
// sequelize model:create --name Artist --attributes name:string,albums:integer,songs:integer
// sequelize model:create --name Album --attributes name:string,tracks:integer,release:string
   
const { Song, Artist, Album } = require('./models')
const { Op } = require("sequelize");

// Song.bulkCreate([
//     { title: 'Borders', artist: 'AMBER', album: 'Borders', plays: 34 },
//     { title: 'Unwell', artist: 'Matchbox Twenty', album: 'More Than You Think You Are', plays: 27 },
//     { title: 'Iris', artist: 'The Goo Goo Dolls', album: 'Dizzy Up The Girl', plays: 12 },
//     { title: 'We Belong', artist: 'Pat Benatar', album: 'Best Shots', plays: 327 },
//     { title: 'Rock It Out', artist: 'Access Games Inc.', album: "D4: Dark Dreams Don't Die OST", plays: 54 },
//     { title: 'Mercy', artist: 'Hurts', album: 'Exile(Deluxe)', plays: 11 },
//     { title: 'Dead Girl Walking', artist: 'Barret Wilbert Weed & Ryan McCartan', album: 'Heathers: The Musical', plays: 5 },
//     { title: "Inky's Lament", artist: 'Starbomb', album: 'Player Select', plays: 3 },
//     { title: 'Beautiful Stranger', artist: 'Madonna', album: 'Celebration', plays: 17 },
// ]).then(function(newSongs){
//     console.log('Bulk songs created', newSongs);
// }).catch(function(error){
//     console.log('Bulk songs not created', error);
// });

// Artist.bulkCreate([
//     { name:'Cobra Starship', albums: 4, songs: 68 },
//     { name:'Starbomb', albums: 3, songs: 41 },
//     { name:'Pat Benatar', albums: 87, songs: 1000 },
//     { name:'David Bowie', albums: 86, songs:  1000},
//     { name:'Tal Bachman', albums: 1, songs: 13 },
//     { name:'Fastball', albums: 7, songs: 90 },
//     { name:'Halestorm', albums: 10, songs: 112 },
//     { name:'Sister Hazel', albums: 20, songs: 300 },
//     { name:'Scissor Sisters', albums: 5, songs: 75 },
//     { name:'Amber Liu', albums: 4, songs: 60 },
//     { name:'Tiffany Young', albums: 2, songs: 30 }
// ]).then(function(newArtists){
//     console.log('Bulk Artists created', newArtists);
// }).catch(function(error){
//     console.log('Bulk artists not created', error);
// });

// Album.bulkCreate([
//     { name: 'Centaurworld: S1', tracks: 37, release: '2021' },
//     { name: 'Spider-Man: Into the Spider-Verse', tracks: 13, release: '2018' },
//     { name: 'Borders', tracks: 1, release: '2016' },
//     { name: 'Amber', tracks: 5, release: '1999' },
//     { name: 'The Prince of Egypt', tracks: 19, release: '1998' },
//     { name: 'Moulin Rouge', tracks: 15, release: '2001' },
//     { name: 'St. James Ballroom', tracks: 17, release: '2012' },
//     { name: 'Hamilton', tracks: 46, release: '2015' },
//     { name: 'Permission to Land', tracks: 11, release: '2003' },
//     { name: '...Baby One More Time', tracks: 16, release: '1999' }
    
// ]).then(function(newAlbums){
//     console.log('Bulk Albums created', newAlbums);
// }).catch(function(error){
//     console.log('Bulk Albums not created', error);
// });

//SONG CREATE

Song.findOrCreate({
    where: {
        title:'Monster',
    },
    defaults: { 
        artist:'Meg & Dia',
        album:'Something Real & Here, Here and Here',
        plays: 46
     }
}).then(([user, created])=>{
    console.log(user);
});

//SONG FIND ONE

Song.findOne({
    where: {plays: 10,}
}).then(foundOneUser =>{
    console.log(foundOneSong.toJSON());
}).catch(function(error){
    console.log('find one Song failed', error);
});

Song.findOne({
    where: {title: { [Op.notLike]:'%elo%'},
            album: {[Op.like]: '%FS%'}}
}).then(foundOneSong =>{
    console.log(foundOneSong.toJSON());
}).catch(function(error){
    console.log('find one Song failed', error);
});

Song.findOne({
    where: { plays: { [Op.between]: [50,500] } }
}).then(foundOneSong =>{
    console.log(foundOneSong.toJSON());
}).catch(function(error){
    console.log('find one song failed', error);
});

//SONG FIND ALL

