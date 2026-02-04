import workerUrl from 'pdfjs-dist/build/pdf.worker.min?url'
import { Worker, Viewer } from '@react-pdf-viewer/core'
import { toolbarPlugin } from '@react-pdf-viewer/toolbar'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/toolbar/lib/styles/index.css'
import { API_HOST } from '../../config'

export default function PdfViewer({ file }) {
  const toolbar = toolbarPlugin()
  const { Toolbar } = toolbar

  return (
    <div className='w-full h-96 md:h-[80vh] rounded border relative'>
      <div className='px-2 py-1'>
        <Toolbar>
          {(slots) => {
            const {
              CurrentPageInput,
              NumberOfPages,
              GoToPreviousPage,
              GoToNextPage,
              Zoom,
              ZoomOut,
              ZoomIn,
              Print,
              EnterFullScreen,

              Download
            } = slots

            return (
              <div className='flex items-center gap-2 overflow-auto'>
                <div className='flex items-center gap-1'>
                  <GoToPreviousPage />
                  <CurrentPageInput />
                  <span className='text-black/70'>/</span>
                  <NumberOfPages />
                  <GoToNextPage />
                </div>

                <ZoomOut />
                <ZoomIn />
                <Zoom />

                <EnterFullScreen />
                <Print />

                <div className='ml-auto'>
                  <Download />
                </div>
              </div>
            )
          }}
        </Toolbar>
      </div>

      <div style={{ height: 'calc(100% - 40px)' }}>
        <Worker workerUrl={workerUrl}>
          <Viewer fileUrl={`${API_HOST}/docs/${file}`} plugins={[toolbar]} />
        </Worker>
      </div>
    </div>
  )
}
