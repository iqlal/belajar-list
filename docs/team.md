---
layout: page
---
<script setup>
    import {
        VPTeamPage,
        VPTeamPageTitle,
        VPTeamMembers
    } from 'vitepress/theme'

    const members = [
    {
        avatar: '/22051204064.jpg',
        name: 'Muhammad Istiqlal',
        title: 'Lead Development',
        links: [
        { icon: 'github', link: 'https://github.com/iqlal' },
        { icon: 'linkedin', link: 'https://linkedin.com/in/iqlal' }
        ]
    },
    {
        avatar: '/22051204080.jpg',
        name: 'M Avicena Hendrico',
        title: 'Content Writer',
    },
    {
        avatar: '/22051204063.jpg',
        name: 'M Ferry Kurniawan',
        title: 'Content Writer',
    },
    {
        avatar: '/22051204057.jpg',
        name: 'M Naufal Nurrohman',
    },
    ]
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>
            Our Contributor
        </template>
        <template #lead>
            Pengembangan dari Website Belajar Lists dibuat oleh beberapa orang yang sesuai dengan bidangnya
        </template>
    </VPTeamPageTitle>
    <VPTeamMembers
    :members="members"
    />
    <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>