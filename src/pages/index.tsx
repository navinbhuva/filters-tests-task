import { Layout } from "@/components/ui"
import { NextPageWithLayout } from "./_app"

const stylingData = [
  {
    id: 1,
    title: "CSS Moduls"
  },
  {
    id: 2,
    title: "Tailwing"
  },
  {
    id: 3,
    title: "Inline Styles"
  },
  {
    id: 4,
    title: "Styled Components",
    description : "Coming soon"
  }
]

const unitsData = [
  {
    id: 1,
    title: "px"
  },
  {
    id: 2,
    title: "rem"
  }
]
const fontSizeData = [
  {
    id: 1,
    title: "top/right/bottom/left"
  },
  {
    id: 2,
    title: "wifth/height"
  },
  {
    id: 3,
    title: "margin"
  },
  {
    id: 4,
    title: "padding"
  },
  {
    id: 5,
    title: "gap"
  },
  {
    id: 6,
    title: "font-size"
  },
  {
    id: 7,
    title: "line-height"
  }
]

const languageData = [
  {
    id: 1,
    title: "JavaScript"
  },
  {
    id: 2,
    title: "TypeScript"
  }
]

const Home: NextPageWithLayout = () => {
  return (
    <div className='container mx-auto '>
      <div className='flex flex-col items-center p-5 '>
        <div>
          <p className='py-2 w-full font-bold'>Create new project</p>
          <div className='flex items-center gap-2 py-2'>
            <div className='w-full'>
              <input
                type='text'
                id='first_name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full '
                placeholder='homepage'
              />
            </div>
            <select
              id='underline_select'
              className='block cursor-pointer border border-gray-300 px-2 w-[70%] text-sm text-gray-500 bg-transparent   rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer'
            >
              <option value='US' className='text-gray-500 hover:!bg-blue-500'>
                JavaScript
              </option>
              <option value='CA' className='text-gray-500'>
                TypeScript
              </option>
              <option value='FR' className='text-gray-500'>
                Next.js
              </option>
            </select>
          </div>

          <div className='bg-blue-50 py-5 px-3'>
            <div className='flex flex-col gap-1'>
              <p>Code Settings</p>
              <p className='text-gray-500'>You can change this later while exporting code</p>
              <div className='flex items-center gap-10 mt-3'>
                {languageData.map(language => {
                  return (
                    <label id={`default-radio-${language.id}`} className='flex items-center cursor-pointer' key={language.id}>
                      <input
                        type='radio'
                        name='language'
                        id={`default-radio-${language.id}`}
                        className='w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-blue-500  active:bg-blue-500 focus:bg-blue-500'
                      />
                      <div className='ml-2 text-sm font-medium text-gray-500'>{language.title}</div>
                    </label>
                  )
                })}
              </div>
            </div>
            <hr className='h-px my-4 bg-gray-200 border-0' />
            <div className='flex flex-col gap-1'>
              <p className='text-gray-400'>Styling</p>
              <div className='flex flex-wrap items-center gap-4 mt-2'>
                {stylingData.map(styling => {
                  return (
                    <label id={`default-radio-${styling.id}`} className='flex items-center cursor-pointer' key={styling.id}>
                      <input
                        type='radio'
                        name='styling'
                        id={`default-radio-${styling.id}`}
                        className='w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-blue-500 focus:ring-blue-500 focus:bg-blue-500'
                      />
                      <div className='ml-2 text-sm font-medium text-gray-500'>{styling.title}</div>
                      {styling.description && <div className='ml-2 text-sm font-medium text-gray-400'>({styling.description})</div>}
                    </label>
                  )
                })}
              </div>
            </div>
            <hr className='h-px my-4 bg-gray-200 border-0' />
            <div className='flex flex-col gap-1'>
              <p className='text-gray-400'>Units</p>
              <div className='flex flex-wrap items-center gap-4 mt-2'>
                {unitsData.map(unit => {
                  return (
                    <label id={`default-radio-${unit.id}`} className='flex items-center cursor-pointer' key={unit.id}>
                      <input
                        type='radio'
                        name='unit'
                        id={`default-radio-${unit.id}`}
                        className='w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-blue-500 focus:ring-blue-500 focus:bg-blue-500'
                      />
                      <div className='ml-2 text-sm font-medium text-gray-500'>{unit.title}</div>
                    </label>
                  )
                })}
              </div>
            </div>
            <hr className='h-px my-4 bg-gray-200 border-0' />
            <div className='flex flex-col gap-1'>
              <p className='text-gray-400'>Base font size 16 px</p>
              <div className='grid grid-cols-4 gap-4 sm:flex sm:flex-wrap mt-2'>
                {fontSizeData.map(font => {
                  return (
                    <label id={`default-radio-${font.id}`} className='flex items-center col-span-2 cursor-pointer' key={font.id}>
                      <input
                        type='checkbox'
                        name='font'
                        id={`default-radio-${font.id}`}
                        className='w-4 h-4  cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
                      />
                      <div className='ml-2 break-all text-sm font-medium text-gray-500'>{font.title}</div>
                    </label>
                  )
                })}
              </div>
            </div>
            <hr className='h-px my-4 bg-gray-200 border-0' />
            <div className='flex flex-col gap-1'>
              <p className='text-gray-400'>File Naming</p>
              <div className='flex flex-wrap items-center gap-4 mt-2'>
                <label id={`naming`} className='flex items-center cursor-pointer'>
                  <input
                    type='radio'
                    name='naming'
                    id={`naming`}
                    className='w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-blue-500 focus:ring-blue-500 focus:bg-blue-500'
                  />
                  <div className='ml-2 text-sm font-medium text-gray-500'>Kebab Case</div>
                </label>
              </div>
            </div>
            <hr className='h-px my-4 bg-gray-200 border-0' />
          </div>

          <div className='flex items-center justify-end my-4 gap-2'>
            <button className=' hover:bg-blue-100 text-blue-500 py-2 px-4 rounded-md'>Cancel</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 border  rounded-md'>Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home
