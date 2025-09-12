import { CalenderIcon } from '@/icons'
import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { twMerge } from 'tailwind-merge'

type DatePickerInputProps = {
  id?: string
  name?: string
  placeholder?: string
  selected?: Date | null
  onChange: (date: Date | null) => void
  className?: string
  disabled?: boolean
  success?: boolean
  error?: boolean
  hint?: string
  parentClassName?: string
  showTimeSelect?: boolean
  dateFormat?: string
  minDate?: Date
  minTime?: Date
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  id,
  name,
  placeholder,
  selected,
  onChange,
  className = '',
  disabled = false,
  success = false,
  error = false,
  hint,
  parentClassName = '',
  showTimeSelect = false,
  dateFormat = 'yyyy-MM-dd HH:mm:ss',
  minDate,
  minTime,
}) => {
  let inputClasses =
    `cursor-pointer bg-white h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 ` +
    `dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 `

  if (disabled) {
    inputClasses += ` text-gray-500 border-gray-300 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`
  } else if (error) {
    inputClasses += ` text-error-800 border-error-500 focus:ring-error-500/10 dark:text-error-400 dark:border-error-500`
  } else if (success) {
    inputClasses += ` text-success-500 border-success-400 focus:ring-success-500/10 focus:border-success-300 dark:text-success-400 dark:border-success-500`
  } else {
    inputClasses += ` bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800`
  }

  return (
    <div className={`relative ${parentClassName}`}>
      <DatePicker
        id={id}
        name={name}
        selected={selected}
        onChange={onChange}
        placeholderText={placeholder}
        className={twMerge(inputClasses, className)}
        disabled={disabled}
        showTimeSelect={showTimeSelect}
        dateFormat={dateFormat}
        wrapperClassName="w-full"
        popperClassName="!z-100 min-w-82"
        minDate={minDate}
        minTime={minTime}
        maxTime={new Date(new Date().setHours(23, 59, 59, 999))}
      />

      {hint && (
        <p className={`mt-1.5 text-xs ${error ? 'text-error-500' : success ? 'text-success-500' : 'text-gray-500'}`}>
          {hint}
        </p>
      )}
      <span className="absolute text-gray-500 pointer-events-none right-3 top-[11px] dark:text-gray-400">
        <CalenderIcon className="size-6" />
      </span>
    </div>
  )
}

export default DatePickerInput
