import { Show, batch, createEffect, createSignal, on } from 'solid-js'
import mainGuitarIMG from './assets/main-guitar.png'

function secondToMilisecond(second: number) {
  return second * 1000
}

const guitarMarkersPos = {
  "E0" : {
    posX : 0,
    posY : 12,
  },
  "E1" :{
    posX : 8,
    posY : 10,
  }, 
  "E2" : {
    posX : 15.5 ,
    posY : 9,
  }, 
  "E3" : {
    posX : 22.5,
    posY : 7,
  }, 
  "E4" : {
    posX : 29,
    posY : 7,
  }, 
  "E5" : {
    posX : 35.3,
    posY : 7,
  }, 
  "E6" : {
    posX : 41.2,
    posY : 5.5,
  },
  "E7" : {
    posX : 46.7,
    posY : 5.2,
  },
  "E8" : {
    posX : 52.1,
    posY : 5.1,
  },
  "E9" : {
    posX : 57,
    posY : 4.3,
  },
  "E10" : {
    posX : 61.7,
    posY : 3,
  },
  "E11" : {
    posX : 66.2,
    posY : 2.6,
  },
  "E12" : {
    posX : 70.3,
    posY : 2,
  },
  "E13" : {
    posX : 74.3,
    posY : 1,
  },
  "E14" : {
    posX : 78.1,
    posY : 0.5,
  },
  "E15" : {
    posX : 81.5,
    posY : 0,
  },
  "E16" : {
    posX : 84.9,
    posY : 0,
  },
  "E17" : {
    posX : 88.1,
    posY : -0.6,
  },
  "E18" : {
    posX : 91.1,
    posY : -0.7,
  },
  "E19" : {
    posX : 93.9,
    posY : -1.2,
  },
  "E20" : {
    posX : 96.5,
    posY : -1.5,
  },
  "A0" : {
    posX : 0,
    posY : 27.5,
  },
  "A1" : {
    posX : 8,
    posY : 26.5,
  },
  "A2" : {
    posX : 15.5,
    posY : 26,
  },
  "A3" : {
    posX : 22.5,
    posY : 25,
  },
  "A4" : {
    posX : 29,
    posY : 24.5,
  },
  "A5" : {
    posX : 35.3,
    posY : 24,
  },
  "A6" : {
    posX : 41.2,
    posY : 23.5,
  },
  "A7" : {
    posX : 46.7,
    posY : 23.5,
  },
  "A8" : {
    posX : 52.1,
    posY : 23.5,
  },
  "A9" : {
    posX : 57,
    posY : 23,
  },
  "A10" : {
    posX : 61.7,
    posY : 22,
  },
  "A11" : {
    posX : 66.2,
    posY : 21.5,
  },
  "A12" : {
    posX : 70.3,
    posY : 21,
  },
  "A13" : {
    posX : 74.3,
    posY : 20.5,
  },
  "A14" : {
    posX : 78.1,
    posY : 20.4,
  },
  "A15" : {
    posX : 81.5,
    posY : 20.2,
  },
  "A16" : {
    posX : 84.9,
    posY : 20.2,
  },
  "A17" : {
    posX : 88.1,
    posY : 20.1,
  },
  "A18" : {
    posX : 91.1,
    posY : 20,
  },
  "A19" : {
    posX : 93.9,
    posY : 19.5,
  },
  "A20" : {
    posX : 96.5,
    posY : 19,
  },
  "D0" : {
    posX : 0,
    posY : 43,
  },
  "D1" : {
    posX : 8,
    posY : 42.5,
  },
  "D2" : {
    posX : 15.5,
    posY : 42.5,
  },
  "D3" : {
    posX : 22.5,
    posY : 42.2,
  },
  "D4" : {
    posX : 29,
    posY : 42,
  },
  "D5" : {
    posX : 35.3,
    posY : 41.5,
  },
  "D6" : {
    posX : 41.2,
    posY : 41.5,
  },
  "D7" : {
    posX : 46.7,
    posY : 41.5,
  },
  "D8" : {
    posX : 52.1,
    posY : 41.5,
  },
  "D9" : {
    posX : 57,
    posY : 41.5,
  },
  "D10" : {
    posX : 61.7,
    posY : 41.5,
  },
  "D11" : {
    posX : 66.2,
    posY : 41.5,
  },
  "D12" : {
    posX : 70.3,
    posY : 41.3,
  },
  "D13" : {
    posX : 74.3,
    posY : 41.25,
  },
  "D14" : {
    posX : 78.1,
    posY : 41.25,
  },
  "D15" : {
    posX : 81.5,
    posY : 41.25,
  },
  "D16" : {
    posX : 84.9,
    posY : 41.25,
  },
  "D17" : {
    posX : 88.1,
    posY : 41.25,
  },
  "D18" : {
    posX : 91.1,
    posY : 41.25,
  },
  "D19" : {
    posX : 93.9,
    posY : 41.25,
  },
  "D20" : {
    posX : 96.5,
    posY : 41.25,
  },
  "G0" : {
    posX : 0,
    posY : 58.6,
  },
  "G1" : {
    posX : 8,
    posY : 58.6,
  },
  "G2" : {
    posX : 15.5,
    posY : 58.6,
  },
  "G3" : {
    posX : 22.5,
    posY : 58.8,
  },
  "G4" : {
    posX : 29,
    posY : 58.8,
  },
  "G5" : {
    posX : 35.3,
    posY : 58.8,
  },
  "G6" : {
    posX : 41.2,
    posY : 59.2,
  },
  "G7" : {
    posX : 46.7,
    posY : 60.1,
  },
  "G8" : {
    posX : 52.1,
    posY : 60.3,
  },
  "G9" : {
    posX : 57,
    posY : 60.3,
  },
  "G10" : {
    posX : 61.7,
    posY : 60.3,
  },
  "G11" : {
    posX : 66.2,
    posY : 60.4,
  },
  "G12" : {
    posX : 70.3,
    posY : 60.4,
  },
  "G13" : {
    posX : 74.3,
    posY : 60.4,
  },
  "G14" : {
    posX : 78.1,
    posY : 60.4,
  },
  "G15" : {
    posX : 81.5,
    posY : 60.7,
  },
  "G16" : {
    posX : 84.9,
    posY : 61,
  },
  "G17" : {
    posX : 88.1,
    posY : 61.3,
  },
  "G18" : {
    posX : 91.1,
    posY : 61.3,
  },
  "G19" : {
    posX : 93.9,
    posY : 62,
  },
  "G20" : {
    posX : 96.5,
    posY : 62.2,
  },
  "B0" : {
    posX : 0,
    posY : 74.5,
  },
  "B1" : {
    posX : 8,
    posY : 75.5,
  },
  "B2" : {
    posX : 15.5,
    posY : 75.5,
  },
  "B3" : {
    posX : 22.5,
    posY : 75.9,
  },
  "B4" : {
    posX : 29,
    posY : 77,
  },
  "B5" : {
    posX : 35.3,
    posY : 78,
  },
  "B6" : {
    posX : 41.2,
    posY : 78,
  },
  "B7" : {
    posX : 46.7,
    posY : 78.5,
  },
  "B8" : {
    posX : 52.1,
    posY : 79,
  },
  "B9" : {
    posX : 57,
    posY : 79.5,
  },
  "B10" : {
    posX : 61.7,
    posY : 80,
  },
  "B11" : {
    posX : 66.2,
    posY : 80.5,
  },
  "B12" : {
    posX : 70.3,
    posY : 81,
  },
  "B13" : {
    posX : 74.3,
    posY : 81.5,
  },
  "B14" : {
    posX : 78.1,
    posY : 82,
  },
  "B15" : {
    posX : 81.5,
    posY : 82.5,
  },
  "B16" : {
    posX : 84.9,
    posY : 82.7,
  },
  "B17" : {
    posX : 88.1,
    posY : 82.7,
  },
  "B18" : {
    posX : 91.1,
    posY : 83.2,
  },
  "B19" : {
    posX : 93.9,
    posY : 83.7,
  },
  "B20" : {
    posX : 96.5,
    posY : 84.2,
  },
  "e0" : {
    posX : 0,
    posY : 89.5,
  },
  "e1" : {
    posX : 8,
    posY : 90.5,
  },
  "e2" : {
    posX : 15.5,
    posY : 91,
  },
  "e3" : {
    posX : 22.5,
    posY : 91.7,
  },
  "e4" : {
    posX : 29,
    posY : 92.5,
  },
  "e5" : {
    posX : 35.3,
    posY : 93.5,
  },
  "e6" : {
    posX : 41.2,
    posY : 95,
  },
  "e7" : {
    posX : 46.7,
    posY : 96,
  },
  "e8" : {
    posX : 52.1,
    posY : 97,
  },
  "e9" : {
    posX : 57,
    posY : 98,
  },
  "e10" : {
    posX : 61.7,
    posY : 99,
  },
  "e11" : {
    posX : 66.2,
    posY : 100,
  },
  "e12" : {
    posX : 70.3,
    posY : 101,
  },
  "e13" : {
    posX : 74.3,
    posY : 102,
  },
  "e14" : {
    posX : 78.1,
    posY : 103,
  },
  "e15" : {
    posX : 81.5,
    posY : 104,
  },
  "e16" : {
    posX : 84.9,
    posY : 104,
  },
  "e17" : {
    posX : 88.1,
    posY : 104,
  },
  "e18" : {
    posX : 91.1,
    posY : 104,
  },
  "e19" : {
    posX : 93.9,
    posY : 104,
  },
  "e20" : {
    posX : 96.5,
    posY : 104,
  },
  
}

const NOTES_WITH_OCTAVE = [
  "E2", "F2", "F#2", "G2", "G#2", 
  "A2", "A#2", "B2", "C3", "C#3", 
  "D3", "D#3", "E3", "F3", "F#3", "G3",
  "G#3", "A3", "A#3", "B3", "C4", "C#4", "D4",
  "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4",
  "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5",
  "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6"
]

const GUITAR_STRING_TO_NOTES_WITH_OCTAVE_INDEX : {[x:string] : number} = {
  'E': 0,
  'A': 5,
  'D': 10,
  'G': 15,
  'B': 19,
  'e': 24
}

const presets : {[x:string] : string} = {
  "Natural (E String)" : "E0, E1, E3, E5, E7, E8, E10, E12",
  "Natural (A String)" : "A0, A2, A3, A5, A7, A9, A10, A12",
  "Natural (D String)" : "D0, D2, D3, D5, D7, D9, D10, D12",
  "Natural (G String)" : "G0, G2, G4, G5, G7, G9, G10, G12",
  "Natural (B String)" : "B0, B1, B3, B5, B6, B8, B10, B12",
  "Natural (e String)" : "e0, e1, e3, e5, e7, e8, e10, e12",
  "C Major 3NPS 1st Position" : "E1, E3, E5, A2, A3, A5, D2, D3, D5, G2, G4, G5, B3, B5, B6, e3, e5, e7",
  "C Major 3NPS 2nd Position" : "E3, E5, E7, A3, A5, A7, D3, D5, D7, G4, G5, G7, B5, B6, B8, e5, e7, e8",
}

function guitarOffsetToNotesWithOctave(notation : string){
  const guitarString = notation[0]
  const offset = parseInt(notation.slice(1) || '0')
  return NOTES_WITH_OCTAVE[GUITAR_STRING_TO_NOTES_WITH_OCTAVE_INDEX[guitarString] + offset]
}

function App() {
  const deviceHeight = window.innerHeight;

  const [bpm, setBpm] = createSignal(120)
  // beatInterval : store the interval id when playing, undefined when not playing
  const [beatInterval, setBeatInterval] = createSignal<number | undefined>(undefined)
  // beat : store the current beat position (0, 1, 2, 3)
  const [beat, setBeat] = createSignal(0)
  // noteField : store the note field input
  const [noteField, setNoteField] = createSignal<string>("")
  // notes : store the processed notes from noteField, 
  // mutate when noteField change
  const [notes, setNotes] = createSignal<string[]>([])
  // noteStack : store the notes that will be played, this takes note from notes signal
  // mutate when notes change and when beat is 0
  const [noteStack, setNoteStack] = createSignal<string[]>([])
  const [isRandomize, setIsRandomize] = createSignal<boolean>(false)
  const [score, setScore] = createSignal<number>(0)
  const [isCursorHoverFingerboard, setIsCursorHoverFingerboard] = createSignal<boolean>(false)
  const [guitarMarkersCount, setGuitarMarkerCount] = createSignal<{[x:string] : number}>(Object.entries(guitarMarkersPos).map(el=>el[0]).reduce((acc, cur) => ({...acc, [cur] : 0}), {}))

  createEffect(on(notes, () =>{
    const newGuitarMarkersCount : {[x:string] : number} = (Object.entries(guitarMarkersPos).map(el=>el[0]).reduce((acc, cur) => ({...acc, [cur] : 0}), {}))
    notes().forEach((note) => {
      newGuitarMarkersCount[note]++
    })
    setGuitarMarkerCount(newGuitarMarkersCount)
  }))

  createEffect(() => { 
    const newNotes = noteField()
                        .split(",")
                        .map((note) => note.trim())
                        .filter((note) => note !== "")
    // legal note e.g. A12, E0
    // consist of guitar string note, and its fret offset
    const isLegal = 
      newNotes.every((note) => note[0] in GUITAR_STRING_TO_NOTES_WITH_OCTAVE_INDEX)
      && newNotes.every((note) => parseInt(note.slice(1) || '0') >= 0 && parseInt(note.slice(1) || '0') <= 20);
    if(!isLegal) return; // If not legal, don't change the notes

    setNotes(newNotes)
  })

  createEffect (on(beat, () => {
      if(beatInterval() === undefined) return; // If not playing, stop the effect
      if(beat() === 0) {
        const audioString = `./sfx/${guitarOffsetToNotesWithOctave(noteStack()[1]).replace('#', 's')}.wav`
        const audio = new Audio(audioString)
        audio.play()

        if(noteStack().length > 2) {
          // If there are still note in the stack, remove the first note
          const newNoteStack = noteStack().slice(1)
          batch(()=>{
            setNoteStack(newNoteStack)
            setScore(score() + 1)
          })
        }else{
          // if there are no note in the stack, refill the stack
          const newNoteStack = noteStack().slice(1)
          const refilledNoteStack = [...newNoteStack, ...(isRandomize() ? notes().sort(() => Math.random() - 0.5) : notes())]
          batch(()=>{
            setNoteStack(refilledNoteStack)
            setScore(score() + 1)
          })
        }
      } else {
        const audio = new Audio('./sfx/metronome-accent.mp3')
        audio.play()
      }
    }))

  
  const toggleRandomize = () => {
    setIsRandomize(!isRandomize())
  }

  const startNoteStack = () => {
    const newNoteStack = isRandomize() ? notes().sort(() => Math.random() - 0.5) : notes()
    setNoteStack(["😃" , ...newNoteStack])
  }

  const clearBeatInterval = () => {
    clearTimeout(beatInterval())
    setBeatInterval(undefined)
    setBeat(0)
    setNoteStack([])
    setScore(0)
  }

  const play = () =>{
    if(notes().length === 0) return;
    startNoteStack()
    if(beatInterval()) clearBeatInterval();
    const newBeatInterval = setInterval(() => {
      setBeat(beat() === 3 ? 0 : beat() + 1)
    }, secondToMilisecond(60 / bpm()))
    setBeatInterval(newBeatInterval)
  }

  return (
    <div style={{height : `${deviceHeight}px`}} class='flex'>
      <div class='flex flex-col w-72 gap-3 items-center h-full overflow-hidden p-3 shadow-2xl relative z-[1]'>
        <h1>Enter Notes</h1>
        <div class='flex flex-col gap-1 w-full grow'>
          <textarea class={'border border-gray-500 w-full '} value={noteField()} onKeyUp={(e) => setNoteField(e.currentTarget.value)}/>
          <div class='flex gap-1'>
            <span class='text-gray-500'>or</span>
            <span>Use Preset</span>
          </div>
          <div class='flex flex-col grow gap-1'>
              {
                Object.keys(presets).map((preset) => (
                  <button class='border border-gray-400 p-1' onClick={() => setNoteField(presets[preset])}>{preset}</button>
                ))
              }
            </div>
        </div>
        
        <div class="flex gap-2 items-center">
          <div class={`rounded-full w-3 h-3 ${beat() === 0 ? 'bg-blue-500' : 'bg-gray-500'}`}></div>
          <div class={`rounded-full w-3 h-3 ${beat() === 1 ? 'bg-blue-500' : 'bg-gray-500'}`}></div>
          <div class={`rounded-full w-3 h-3 ${beat() === 2 ? 'bg-blue-500' : 'bg-gray-500'}`}></div>
          <div class={`rounded-full w-3 h-3 ${beat() === 3 ? 'bg-blue-500' : 'bg-gray-500'}`}></div>
          <input type="number" class='border border-gray-400 w-20' value={bpm()} onChange={(e) => setBpm(parseInt(e.currentTarget.value))} />
          <button class={'border border-gray-400 p-2 ' + (isRandomize() ? 'bg-gray-400' : 'bg-gray-200')} onClick={toggleRandomize}>randomize</button>
        </div>
        <div class='text-4xl flex justify-center'>
          {
            beatInterval() === undefined
            ? <button onClick={play}><i class="bi bi-play-fill"></i></button> 
            : <button onClick={() => clearBeatInterval()}><i class="bi bi-stop-fill"></i></button>
          } 
        </div>
        <Show when={beatInterval() !== undefined}>
          <div class='flex gap-1 items-center'>
            <div class='w-32 h-32 bg-blue-500 text-white grid place-content-center'>
              <span class='text-6xl font-bold'>
                {(guitarOffsetToNotesWithOctave(noteStack()[0]) || '😃').replace(/[0-9]/g, '')}
              </span>
            </div>
            <div class='w-20 h-20 bg-blue-500 text-white grid place-content-center'>
              <span class='text-3xl font-bold'>
                {guitarOffsetToNotesWithOctave(noteStack()[1]).replace(/[0-9]/g, '')}
              </span>
            </div>
          </div>
        </Show>
        {/* <div class='flex gap-1 items-center'>
          <span>Score :</span>
          <div class='bg-blue-200 px-1'>{score()}</div>
        </div> */}
        { score() > 0 && notes().length > 0 && beatInterval() !== undefined && score()/notes().length > 0 &&
          <div class='flex gap-1 items-center'>
            <span>Loop :</span>
            <div class='bg-blue-200 px-1'>{Math.trunc(score()/notes().length)}</div>
          </div>
        }
      </div>
      <div class='grow flex items-center relative'>
        <div class='absolute top-0 flex flex-col m-2'>
          <span class='text-gray-600'><span class='font-bold text-black'>hover over fingerboard </span>to see the notes</span>
          <span class='text-gray-600'><span class='font-bold text-black'>click a note : </span>to add note to the list</span>
          <span class='text-gray-600'><span class='font-bold text-black'>shift + click a note : </span>to remove note from list</span>
        </div>
        <div class='w-full relative'>
          <div class='absolute left-[4%] w-[71.5%] h-[15%] top-[50.8%] transform -translate-y-1/2'
          onMouseOver={()=>setIsCursorHoverFingerboard(true)}
          onMouseLeave={()=>setIsCursorHoverFingerboard(false)}>
            <div class='relative w-full h-full'>
              { Object.entries(guitarMarkersPos).map((marker) => (
                  <div class='absolute group z-[1] hover:!z-[2]' style={
                    {
                      right : `${marker[1].posX}%`,
                      top : `${marker[1].posY}%`
                    }
                  }
                  onclick={(evt)=>{
                    let newNoteField;

                    if(evt.shiftKey){
                      //if user hold shift, remove marker from the notes
                      if(notes().some((el)=>el === marker[0])){
                        // if marker is exist in the notes, remove it
                        const lastMatchedIndexReversed = [...notes()].reverse().findIndex((el)=>el === marker[0])
                        const lastMatchedIndex = notes().length - lastMatchedIndexReversed - 1
                        newNoteField = notes().filter((_, i) => i != lastMatchedIndex)
                      }else{
                        // if marker is not exist in the notes, do nothing
                        return
                      }
                    } else{
                      // if marker is not in the notes, add it
                      newNoteField =  [...notes(), marker[0]]
                    }

                    setNoteField(newNoteField.join(', '))
                  }}>
                    <div class='relative w-full h-full'>
                      <Show when={!beatInterval()}>
                        <Show when={guitarMarkersCount()[marker[0]] > 1}>
                          <div class='bg-blue-500 absolute top-[calc(50%+1.5px)] right-[calc(50%+1.5px)] w-3 h-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:scale-[2]' />
                          <div class='bg-blue-400 absolute top-[calc(50%-1.5px)] right-[calc(50%-1.5px)] w-3 h-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:scale-[2]' />
                        </Show>
                        <Show when={guitarMarkersCount()[marker[0]] < 2}>
                          <div class={'absolute top-1/2 right-1/2 w-3 h-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:scale-[2] ' 
                          + (guitarMarkersCount()[marker[0]] > 0 
                            ? ' bg-blue-500' 
                            : (isCursorHoverFingerboard() 
                              ? ' bg-white border-blue-500 border' 
                              : ''))} />
                        </Show>
                      </Show>
                      <Show when={!!beatInterval()}>
                        <div class={'absolute top-1/2 right-1/2 w-3 h-3 transform -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:scale-[2] ' 
                          + (noteStack()[0] === marker[0] 
                            ? ' bg-blue-500' 
                            : noteStack()[1] === marker[0] 
                              ? ' bg-yellow-500'
                              : (guitarMarkersCount()[marker[0]] > 0) 
                                ? ' bg-white border-blue-500 border'
                                : '' )}/>
                      </Show>
                    </div>
                  </div>
                ))
              }
              <div class='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[110%] h-[130%] z-[0]' 
                
                />
            </div>
          </div>
          <img src={mainGuitarIMG} alt="main-guitar" class='object-contain w-full' />
        </div>
      </div>      
    </div>
  )
}

export default App
