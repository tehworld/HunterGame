import React from 'react'
import {ProgressBarContainer, ProgressBarInside} from "./ProgressBarElements"

function ProgressBar({valueProgress}) {
  return (
    <>
        <ProgressBarContainer>
            <ProgressBarInside value={valueProgress}>
            </ProgressBarInside>
        </ProgressBarContainer>
    </>
  )
}

export default ProgressBar