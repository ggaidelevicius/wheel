'use client'

import { useState } from "react"
import { randomNumberFromArrayLength } from "@/helpers/random-number-generators"

export const Selector = () => {
  const [selectedPlace, setSelectedPlace] = useState('')
  const places = [
    "post",
    "anthony",
    "lupolab",
    "maccas",
    "lal qila",
    "little viet",
    "marumo",
    "james",
    "sup so good",
    "senoji",
    "u&i",
    "jaws",
    "pho huynh",
    "tsukaya",
    "sunlight",
    "fortune 5",
    "ccp dumplings",
    "pinchos leederville",
    "vivi",
    "get pegged 7/11",
    "walk around",
    "dailies 1969",
    "thai",
    "sedap palace",
    "draskos",
    "invite phil & michael",
    "rojiura curry samurai",
    "gamble it all",
    "ittaba",
    "board game jame",
    "plus one",
    "park bbq at eric house",
    "tommy",
    "peasants paradice",
    "eatclub",
    "katsu katsu",
    "bivouac",
    "chopsticks",
    "jigoro",
    "city garden",
    "papa korean house",
    "big don",
    "furaibo",
    "kukan izakaya",
    "open googlem aps",
    "royals",
    "tak chee",
    "meat wine co",
    "bobert",
    "lawrence house",
    "tommy cooks for us",
    "ikea",
    "larry",
    "nathan",
    "greenwood hotel",
    "monsterella",
    "ippudo",
    "katen",
    "komodo cafe",
    "fibber mcfoos",
    "7grams",
    "gus",
    "ask a stranger",
    "panchos vic park",
    "spritz",
    "park bbq ezone",
    "the bite",
    "something else",
    "eric",
    "get fuxking schwasted",
    "nobu",
    "bangkok street thai grill house",
    "lawrence house",
    "porkies",
    "king/dragon hotpot",
    "super tesudo (blutak)",
    "sumiya gin",
    "good fortune duck",
    "6head",
    "big gus smoked proteins",
    "hood burger",
    "bintang cafe",
    "munchee",
    "tobkotsu king ramen",
    "tosaka",
    "gyuen",
    "no friday funtime",
    "bird"
  ]

  const handleClick = () => {
    setSelectedPlace(places[randomNumberFromArrayLength(places)])
  }

  return (
    <>
      <button onClick={handleClick}>spin</button>
      <p>choice: <span>{selectedPlace}</span></p>
    </>
  )
}
