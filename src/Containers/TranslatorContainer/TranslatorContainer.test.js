import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import TranslatorContainer from './TranslatorContainer'
import '@testing-library/jest-dom/extend-expect'

describe('Translator Container', () => {
  afterEach(cleanup)

  it('Should validate input is not empty, and show error in that case', () => {
    const { getByTestId, getByText } = render(<TranslatorContainer />)

    fireEvent.click(getByTestId('convert-button'))

    expect(getByText("Can't be blank")).toBeInTheDocument()
  })

  it('Should validate input is not out of range, and show error if the number > 3999', () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(
      <TranslatorContainer />
    )

    fireEvent.change(getByPlaceholderText('Type numbers'), {
      target: { value: '12345' }
    })
    fireEvent.click(getByTestId('convert-button'))

    expect(getByText(/You should only type numbers/)).toBeInTheDocument()
  })

  it('Should validate input is not out of range, and show error if the number < 0', () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(
      <TranslatorContainer />
    )

    fireEvent.change(getByPlaceholderText('Type numbers'), {
      target: { value: '-456' }
    })
    fireEvent.click(getByTestId('convert-button'))

    expect(getByText(/You should only type numbers/)).toBeInTheDocument()
  })

  it('Should output the correct value in Roman numbers', () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(
      <TranslatorContainer />
    )

    fireEvent.change(getByPlaceholderText('Type numbers'), {
      target: { value: '1564' }
    })
    fireEvent.click(getByTestId('convert-button'))

    expect(getByText(/MDLXIV/)).toBeInTheDocument()
  })
})
