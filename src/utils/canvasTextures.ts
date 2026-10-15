import * as THREE from 'three'

type Painter = (ctx: CanvasRenderingContext2D, w: number, h: number) => void

function make(w: number, h: number, paint: Painter): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')
  if (ctx) paint(ctx, w, h)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  return tex
}

function chrome(ctx: CanvasRenderingContext2D, w: number, title: string) {
  ctx.fillStyle = '#0f1523'
  ctx.fillRect(0, 0, w, 44)
  ;['#ef4444', '#f59e0b', '#10b981'].forEach((c, i) => {
    ctx.fillStyle = c
    ctx.beginPath()
    ctx.arc(26 + i * 22, 22, 6, 0, Math.PI * 2)
    ctx.fill()
  })
  ctx.fillStyle = '#9ca3af'
  ctx.font = '600 16px ui-monospace, monospace'
  ctx.fillText(title, 110, 28)
}

const bg = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
  ctx.fillStyle = '#111827'
  ctx.fillRect(0, 0, w, h)
}

/** Floating code editor: syntax-coloured lines, no real code claims. */
export const codeEditorTexture = () =>
  make(640, 420, (ctx, w, h) => {
    bg(ctx, w, h)
    chrome(ctx, w, 'SyncSpace · editor')
    const palette = ['#10b981', '#06b6d4', '#9ca3af', '#f9fafb', '#a78bfa']
    const lines: [number, number[]][] = [
      [0, [90, 120]], [1, [60, 150, 80]], [1, [110, 70]], [2, [200]], [2, [140, 90]],
      [1, [80, 160]], [3, [120, 60, 100]], [0, [70, 90]], [2, [180]], [1, [100, 100]], [3, [150, 80]], [2, [90]],
    ]
    lines.forEach(([indent, segs], i) => {
      let x = 36 + indent * 28
      const y = 82 + i * 26
      ctx.fillStyle = '#374151'
      ctx.font = '13px ui-monospace, monospace'
      ctx.fillText(String(i + 1).padStart(2, ' '), 10, y + 9)
      segs.forEach((len, j) => {
        ctx.fillStyle = palette[(i + j) % palette.length]
        ctx.globalAlpha = 0.85
        ctx.fillRect(x, y, len, 10)
        x += len + 12
      })
      ctx.globalAlpha = 1
    })
    // Collaborator cursors
    ctx.fillStyle = '#10b981'; ctx.fillRect(300, 158, 3, 18)
    ctx.fillStyle = '#06b6d4'; ctx.fillRect(210, 262, 3, 18)
  })

export const whiteboardTexture = () =>
  make(520, 360, (ctx, w, h) => {
    bg(ctx, w, h)
    chrome(ctx, w, 'SyncSpace · whiteboard')
    ctx.lineWidth = 3
    ctx.strokeStyle = '#10b981'
    ctx.strokeRect(50, 90, 110, 64)
    ctx.strokeStyle = '#06b6d4'
    ctx.strokeRect(300, 90, 120, 64)
    ctx.strokeRect(180, 220, 120, 64)
    ctx.strokeStyle = '#9ca3af'
    ctx.beginPath()
    ctx.moveTo(160, 122); ctx.lineTo(300, 122)
    ctx.moveTo(360, 154); ctx.lineTo(260, 220)
    ctx.moveTo(105, 154); ctx.lineTo(200, 220)
    ctx.stroke()
    ctx.fillStyle = '#10b981'
    ctx.beginPath(); ctx.moveTo(440, 300); ctx.lineTo(458, 312); ctx.lineTo(446, 316); ctx.closePath(); ctx.fill()
  })

export const mobileTexture = (title: string) =>
  make(300, 560, (ctx, w, h) => {
    bg(ctx, w, h)
    ctx.fillStyle = '#0f1523'
    ctx.fillRect(0, 0, w, 54)
    ctx.fillStyle = '#9ca3af'
    ctx.font = '600 17px ui-monospace, monospace'
    ctx.fillText(title, 20, 34)
    for (let i = 0; i < 4; i++) {
      ctx.fillStyle = '#1f2937'
      ctx.fillRect(20, 80 + i * 96, w - 40, 78)
      ctx.fillStyle = i % 2 ? '#06b6d4' : '#10b981'
      ctx.fillRect(34, 96 + i * 96, 46, 46)
      ctx.fillStyle = '#4b5563'
      ctx.fillRect(96, 100 + i * 96, 120, 9)
      ctx.fillRect(96, 122 + i * 96, 80, 9)
    }
    ctx.fillStyle = '#10b981'
    ctx.fillRect(20, h - 70, w - 40, 44)
  })

/** Learning-platform panel for MathMastery: equation-ish glyph row plus progress bars. */
export const learnTexture = () =>
  make(460, 300, (ctx, w, h) => {
    bg(ctx, w, h)
    chrome(ctx, w, 'MathMastery')
    ctx.fillStyle = '#10b981'
    ctx.font = '700 44px ui-monospace, monospace'
    ctx.fillText('x² + y² = r²', 40, 130)
    ;[0.82, 0.58, 0.7].forEach((p, i) => {
      ctx.fillStyle = '#1f2937'
      ctx.fillRect(40, 175 + i * 34, w - 80, 14)
      ctx.fillStyle = i === 1 ? '#06b6d4' : '#10b981'
      ctx.fillRect(40, 175 + i * 34, (w - 80) * p, 14)
    })
  })
