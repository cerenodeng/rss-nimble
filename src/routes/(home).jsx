import { createRouteAction } from 'solid-start/data';
import { Show } from 'solid-js';

export default function Home() {
  const [adding, add] = createRouteAction(async (formData) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 2000));
    // const url = formData.get('url');
    console.log(formData);
    // return redirect('/');
  });

  return (
    <main class='flex w-full flex-col p-10'>
      <form>
        <div class='flex gap-x-5'>
          <input
            class='w-full max-w-xs rounded border border-slate-300 p-2 hover:border-slate-500 focus-visible:outline-0'
            name='url'
            type='url'
            placeholder='RSS URL'
            disabled={adding.pending}
          />
          <button
            class='group flex w-24 items-center justify-center gap-x-1 rounded border border-slate-200 bg-slate-200 p-2 hover:border-slate-500 hover:bg-slate-500'
            type='submit'
            disabled={adding.pending}
            onClick={() => add('https://google.com')}
          >
            <Show
              when={!adding.pending}
              fallback={<div class='text-slate-200'>Saving...</div>}
            >
              <svg
                className='h-4 w-4 text-slate-800 group-hover:text-slate-50'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 1v16M1 9h16'
                />
              </svg>
              <div class='text-slate-800 group-hover:text-slate-50'>Add</div>
            </Show>
          </button>
        </div>
      </form>
    </main>
  );
}
