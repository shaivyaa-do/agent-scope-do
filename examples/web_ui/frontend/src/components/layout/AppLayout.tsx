import { Outlet, useLocation } from 'react-router-dom';

import { AppSidebar } from '@/components/layout/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useTranslation } from '@/i18n/useI18n';

export function AppLayout() {
	const location = useLocation();
	const { t } = useTranslation();
	const serverUrl = localStorage.getItem('server_url') || 'http://localhost:8001';

	const getPageInfo = () => {
		const path = location.pathname;
		if (path.startsWith('/chat')) return { section: t('common.workspace'), title: t('common.chat') };
		if (path.startsWith('/schedule')) return { section: t('common.workspace'), title: t('common.schedule') };
		if (path.startsWith('/channel')) return { section: t('common.workspace'), title: t('common.channel') };
		if (path.startsWith('/credential')) return { section: t('common.integrations'), title: t('common.credential') };
		if (path.startsWith('/mcp')) return { section: t('common.integrations'), title: t('common.mcp-hub') };
		if (path.startsWith('/skill')) return { section: t('common.integrations'), title: t('common.skill-hub') };
		if (path.startsWith('/knowledge')) return { section: t('common.integrations'), title: t('common.knowledge') };
		if (path.startsWith('/setup')) return { section: t('common.system'), title: t('common.settings') };
		return { section: 'Platform', title: 'DataObserve' };
	};

	const pageInfo = getPageInfo();

	return (
		<div className="h-screen w-screen flex overflow-hidden bg-[#f4f4f5]">
			<SidebarProvider>
				<AppSidebar />
				<div className="flex-1 min-w-0 flex flex-col h-full bg-[#f4f4f5] overflow-hidden">
					{/* Top Header */}
					<header className="h-16 shrink-0 bg-[#f4f4f5] px-6 pt-2 flex items-center justify-between z-10 select-none">
						<div className="flex items-center gap-2.5">
							<span className="text-[13px] font-medium text-[rgba(24,24,27,0.5)] uppercase tracking-wider">
								{pageInfo.section}
							</span>
							<span className="text-[rgba(24,24,27,0.3)] font-light">/</span>
							<h1 className="text-[18px] font-semibold text-[rgba(24,24,27,0.9)] tracking-tight">
								{pageInfo.title}
							</h1>
						</div>
						<div className="flex items-center gap-3 text-xs">
							<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-[13px] text-[rgba(24,24,27,0.5)]">
								<span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
								<span className="font-mono text-[13px] truncate max-w-48 text-[rgba(24,24,27,0.7)]">{serverUrl}</span>
							</div>
						</div>
					</header>

					{/* Main Container: Grey background with p-4 pt-2 for white rounded containers */}
					<main className="flex-1 min-h-0 px-5 pb-5 pt-2.5 overflow-hidden bg-[#f4f4f5] flex flex-col relative">
						<Outlet />
					</main>
				</div>
			</SidebarProvider>
		</div>
	);
}
