export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			consulting_infos: {
				Row: {
					consultant_name: string | null;
					created_at: string | null;
					id: number;
					name: string;
					position: string | null;
				};
				Insert: {
					consultant_name?: string | null;
					created_at?: string | null;
					id?: number;
					name: string;
					position?: string | null;
				};
				Update: {
					consultant_name?: string | null;
					created_at?: string | null;
					id?: number;
					name?: string;
					position?: string | null;
				};
				Relationships: [];
			};
			consulting_price_infos: {
				Row: {
					add: number | null;
					comment: number | null;
					created_at: string | null;
					discount: number | null;
					id: number;
					name: number | null;
					price: number | null;
				};
				Insert: {
					add?: number | null;
					comment?: number | null;
					created_at?: string | null;
					discount?: number | null;
					id?: number;
					name?: number | null;
					price?: number | null;
				};
				Update: {
					add?: number | null;
					comment?: number | null;
					created_at?: string | null;
					discount?: number | null;
					id?: number;
					name?: number | null;
					price?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: 'consulting_price_infos_name_fkey';
						columns: ['name'];
						referencedRelation: 'consulting_infos';
						referencedColumns: ['id'];
					}
				];
			};
			dress_infos: {
				Row: {
					created_at: string | null;
					id: number;
					name: string;
				};
				Insert: {
					created_at?: string | null;
					id?: number;
					name: string;
				};
				Update: {
					created_at?: string | null;
					id?: number;
					name?: string;
				};
				Relationships: [];
			};
			dress_price_infos: {
				Row: {
					add: number | null;
					comment: number | null;
					created_at: string | null;
					discount: number | null;
					first: number | null;
					id: number;
					name: number | null;
					price: number | null;
					second: number | null;
					third: number | null;
				};
				Insert: {
					add?: number | null;
					comment?: number | null;
					created_at?: string | null;
					discount?: number | null;
					first?: number | null;
					id?: number;
					name?: number | null;
					price?: number | null;
					second?: number | null;
					third?: number | null;
				};
				Update: {
					add?: number | null;
					comment?: number | null;
					created_at?: string | null;
					discount?: number | null;
					first?: number | null;
					id?: number;
					name?: number | null;
					price?: number | null;
					second?: number | null;
					third?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: 'dress_price_infos_first_fkey';
						columns: ['first'];
						referencedRelation: 'dress_infos';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'dress_price_infos_name_fkey';
						columns: ['name'];
						referencedRelation: 'dress_infos';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'dress_price_infos_second_fkey';
						columns: ['second'];
						referencedRelation: 'dress_infos';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'dress_price_infos_third_fkey';
						columns: ['third'];
						referencedRelation: 'dress_infos';
						referencedColumns: ['id'];
					}
				];
			};
			makeup_infos: {
				Row: {
					created_at: string | null;
					id: number;
					name: string;
				};
				Insert: {
					created_at?: string | null;
					id?: number;
					name: string;
				};
				Update: {
					created_at?: string | null;
					id?: number;
					name?: string;
				};
				Relationships: [];
			};
			makeup_price_infos: {
				Row: {
					add: number | null;
					comment: number | null;
					created_at: string | null;
					discount: number | null;
					id: number;
					name: number | null;
					price: number | null;
				};
				Insert: {
					add?: number | null;
					comment?: number | null;
					created_at?: string | null;
					discount?: number | null;
					id?: number;
					name?: number | null;
					price?: number | null;
				};
				Update: {
					add?: number | null;
					comment?: number | null;
					created_at?: string | null;
					discount?: number | null;
					id?: number;
					name?: number | null;
					price?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: 'makeup_price_infos_name_fkey';
						columns: ['name'];
						referencedRelation: 'makeup_infos';
						referencedColumns: ['id'];
					}
				];
			};
			sdm_infos: {
				Row: {
					consulting_date: string | null;
					consulting_info: number | null;
					consultingInfo: Json | null;
					created_at: string | null;
					dress_info: number | null;
					dressInfo: Json | null;
					id: number;
					makeup_info: number | null;
					makeUpInfo: Json | null;
					studio_info: number | null;
					studioInfo: Json | null;
					totalPrice: number;
					wedding_date: string | null;
				};
				Insert: {
					consulting_date?: string | null;
					consulting_info?: number | null;
					consultingInfo?: Json | null;
					created_at?: string | null;
					dress_info?: number | null;
					dressInfo?: Json | null;
					id?: number;
					makeup_info?: number | null;
					makeUpInfo?: Json | null;
					studio_info?: number | null;
					studioInfo?: Json | null;
					totalPrice?: number;
					wedding_date?: string | null;
				};
				Update: {
					consulting_date?: string | null;
					consulting_info?: number | null;
					consultingInfo?: Json | null;
					created_at?: string | null;
					dress_info?: number | null;
					dressInfo?: Json | null;
					id?: number;
					makeup_info?: number | null;
					makeUpInfo?: Json | null;
					studio_info?: number | null;
					studioInfo?: Json | null;
					totalPrice?: number;
					wedding_date?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'sdm_infos_consulting_info_fkey';
						columns: ['consulting_info'];
						referencedRelation: 'consulting_price_infos';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'sdm_infos_dress_info_fkey';
						columns: ['dress_info'];
						referencedRelation: 'dress_price_infos';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'sdm_infos_makeup_info_fkey';
						columns: ['makeup_info'];
						referencedRelation: 'makeup_price_infos';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'sdm_infos_studio_info_fkey';
						columns: ['studio_info'];
						referencedRelation: 'studio_infos';
						referencedColumns: ['id'];
					}
				];
			};
			studio_infos: {
				Row: {
					created_at: string | null;
					id: number;
					name: string;
				};
				Insert: {
					created_at?: string | null;
					id?: number;
					name: string;
				};
				Update: {
					created_at?: string | null;
					id?: number;
					name?: string;
				};
				Relationships: [];
			};
			studio_price_infos: {
				Row: {
					add: number | null;
					comment: number | null;
					created_at: string | null;
					discount: number | null;
					id: number;
					name: number | null;
					price: number | null;
				};
				Insert: {
					add?: number | null;
					comment?: number | null;
					created_at?: string | null;
					discount?: number | null;
					id?: number;
					name?: number | null;
					price?: number | null;
				};
				Update: {
					add?: number | null;
					comment?: number | null;
					created_at?: string | null;
					discount?: number | null;
					id?: number;
					name?: number | null;
					price?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: 'studio_price_infos_name_fkey';
						columns: ['name'];
						referencedRelation: 'studio_infos';
						referencedColumns: ['id'];
					}
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
