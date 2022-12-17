import axios from "axios";

export const instance = axios.create({
	baseURL: 'https://sandbox.claimflow.ai/api/v1/',
	headers: { 'X-API-Key': 'BPZEeNDq.PMQffpGZ0hDoUanFOmVnph8EW2k1ceuO' }
});