import { mapSectionContent, mapSections, mapSectionTwoColumns } from './map-sections'

describe('map-sections', () => {
  it('should render section with no data', () => {
    const data = mapSections()
    expect(data).toEqual([])
  })

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns()
    expect(data.background).toBe(false)
    expect(data.component).toBe('')
    expect(data.sectionId).toBe('')
    expect(data.srcImg).toBe('')
    expect(data.text).toBe('')
    expect(data.title).toBe('')
  })

  it('should map section two columns with data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        section_id: 'contact',
      },
      image: {
        url: 'a.svg',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('contact');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  })

  it('should map section content', () => {
    const data = mapSectionContent()
    expect(data.background).toBe(false)
    expect(data.component).toBe('')
    expect(data.sectionId).toBe('')
    expect(data.title).toBe('')
    expect(data.html).toBe('')
  })

  it('should map section content', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'Pricing',
      content: 'abc',
      metadata: {
        background: false,
        section_id: 'pricing',
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('pricing');
    expect(data.title).toBe('Pricing');
    expect(data.html).toBe('abc');
  })
})
