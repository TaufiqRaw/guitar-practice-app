# Array of notes
notes=("B" "C" "Cs" "D" "Ds" "E" "F" "Fs" "G" "Gs" "A" "As")

# Counter for iterating through notes
counter=2

index=5

# Iterate through all wav files in the current directory
for file in *.wav; do
    # Get the current note
    note=${notes[index % ${#notes[@]}]}
    
    # Create the new filename with note and counter
    new_filename="${note}${counter}.wav"

    echo "${note}${counter}"

    # Rename the file
    mv "$file" "$new_filename"

    # Increment the counter
    if [ $((index % ${#notes[@]} )) == 0 ] && [ $index != 0 ]; then 
    ((counter++))
    fi
    ((index++))
done

echo "Renaming complete."