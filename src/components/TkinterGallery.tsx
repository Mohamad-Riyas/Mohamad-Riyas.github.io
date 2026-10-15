import Reveal from './Reveal'

/** Window chrome styled like a native desktop window. */
function Win({ title, width, children, caption }: { title: string; width?: string; children: React.ReactNode; caption: string }) {
  return (
    <figure className={width}>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#f0f0f0] text-[#1b1b1b] shadow-2xl shadow-black/40" role="img" aria-label={caption}>
        <div className="flex items-center gap-2 bg-[#2b2f3a] px-3 py-2 text-[0.72rem] text-gray-200">
          <span className="font-mono">{title}</span>
          <span className="ml-auto flex gap-1.5" aria-hidden><i className="size-2.5 rounded-full bg-gray-500" /><i className="size-2.5 rounded-full bg-gray-500" /><i className="size-2.5 rounded-full bg-red-400" /></span>
        </div>
        <div className="p-3 text-[0.7rem] sm:text-xs">{children}</div>
      </div>
      <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
    </figure>
  )
}

const rows = [
  ['Prepare coursework report', 'Draft the methodology section', 'High', '2026-11-02'],
  ['Review pull request', 'Check validation edge cases', 'Medium', '2026-11-05'],
  ['Update project README', 'Add setup instructions', 'Low', '2026-11-12'],
  ['Practise viva questions', 'Architecture and design choices', 'High', '2026-11-18'],
]

const field = 'rounded-[3px] border border-[#9a9a9a] bg-white px-2 py-1'
const btn = 'rounded-[3px] border border-[#b5b5b5] bg-[#e1e1e1] px-3 py-1'

export default function TkinterGallery() {
  return (
    <div>
      <p className="mb-6 inline-flex rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 font-mono text-[0.7rem] text-secondary">
        Interface reconstruction drawn from the Stage_04.py layout, with sample data
      </p>
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <Win title="Personal Task Manager" caption="Main window: filter bar, sortable task table, and Add / Edit / Delete actions.">
            <p className="mb-3 text-center text-base font-bold italic underline sm:text-lg">Personal Task Manager</p>
            <fieldset className="mb-3 rounded border border-[#b5b5b5] p-2">
              <legend className="px-1">Filters</legend>
              <div className="flex flex-wrap items-center gap-2">
                <span>Name:</span><span className={`${field} w-20`}>&nbsp;</span>
                <span>Priority:</span><span className={field}>All ▾</span>
                <span>Date (YYYY-MM-DD):</span><span className={`${field} w-20`}>&nbsp;</span>
                <span className={btn}>Apply</span><span className={btn}>Clear</span>
              </div>
            </fieldset>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[440px] border border-[#b5b5b5] bg-white text-left">
                <thead className="bg-[#e6e6e6]">
                  <tr>{['Name', 'Description', 'Priority', 'Due_Date'].map((h) => <th key={h} className="border-r border-[#c8c8c8] px-2 py-1 font-semibold last:border-0">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r[0]} className={i === 1 ? 'bg-[#4a90d9] text-white' : ''}>
                      {r.map((c, j) => <td key={j} className="px-2 py-1">{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 flex flex-col items-center gap-1.5">
              {['Add Task', 'Edit Task', 'Delete Task'].map((b) => <span key={b} className={`${btn} w-24 text-center`}>{b}</span>)}
            </div>
          </Win>
        </Reveal>

        <div className="grid content-start gap-8 lg:col-span-2">
          <Reveal delay={0.08}>
            <Win title="Edit Task" caption="Modal dialog shared by add and edit, with a priority drop-down.">
              <div className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-2">
                <span className="text-right">Name</span><span className={field}>Review pull request</span>
                <span className="text-right">Description</span><span className={`${field} h-14`}>Check validation edge cases</span>
                <span className="text-right">Priority</span><span className={field}>Medium ▾</span>
                <span className="text-right">Due Date (YYYY-MM-DD):</span><span className={field}>2026-11-05</span>
              </div>
              <div className="mt-3 flex justify-center gap-2"><span className={btn}>Save</span><span className={btn}>Cancel</span></div>
            </Win>
          </Reveal>
          <Reveal delay={0.14}>
            <Win title="Error" caption="Validation: the due date must parse as YYYY-MM-DD, and a name is required.">
              <div className="flex items-center gap-3 py-1">
                <span aria-hidden className="grid size-8 place-items-center rounded-full bg-red-600 font-bold text-white">×</span>
                <span>Invalid date format (use YYYY-MM-DD)</span>
              </div>
              <div className="mt-3 flex justify-end"><span className={`${btn} px-5`}>OK</span></div>
            </Win>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
